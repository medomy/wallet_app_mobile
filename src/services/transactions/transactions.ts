import { instance } from "../../network";
import { Transaction, TransactionAppUsed } from "../../types/transaction";
import UserService from "../user/userService";

class TransactionService {
    static async getUserTransactions(mobile: string, token: string): Promise<TransactionAppUsed[]> {
        try {
            const recievedTransactionsRes = await instance.get(`/transactionsRecieved/${mobile}`, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            });
            //console.log("recievedTransactions" , recievedTransactionsRes.data);
            if (recievedTransactionsRes.data.error) throw new Error(recievedTransactionsRes.data.error);
            const madeTransactionsRes = await instance.get(`/transactionsMade/${mobile}`, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            });
            //console.log(madeTransactionsRes.data);
            if (madeTransactionsRes.data.error) throw new Error(madeTransactionsRes.data.error);
            const recievedTransactions: Transaction[] = recievedTransactionsRes.data.map((trans: Transaction) => ({ ...trans, recieved: true }));
            const recievedTransactionsAppUsed: TransactionAppUsed[] = [];
            for (let i = 0; i < recievedTransactions.length; i++) {
                try {
                    const user = await UserService.getUserByMobile(recievedTransactions[i].fromMobile, token);
                    recievedTransactionsAppUsed.push({ ...recievedTransactions[i], transactedUser: user });
                } catch (err: any) {
                    throw new Error(err.message);
                }
            }
            // recievedTransactions.forEach(async (transaction) => {
            //     try {
            //         const user = await UserService.getUserByMobile(transaction.fromMobile, token);
            //         recievedTransactionsAppUsed.push({ ...transaction, transactedUser: user });
            //     } catch (err: any) {
            //         throw new Error(err.message);
            //     }
            // })
            const madeTransactions: Transaction[] = madeTransactionsRes.data.map((trans: Transaction) => ({ ...trans, recieved: false }));
            const madeTransactionsAppUsed: TransactionAppUsed[] = [];
            for (let i = 0; i < madeTransactions.length; i++) {
                try {
                    const user = await UserService.getUserByMobile(madeTransactions[i].toMobile, token);
                    madeTransactionsAppUsed.push({ ...madeTransactions[i], transactedUser: user });
                } catch (err: any) {
                    throw new Error(err.message);
                }
            }
            // madeTransactions.forEach(async (transaction) => {
            //     try {
            //         const user = await UserService.getUserByMobile(transaction.toMobile, token);
            //         madeTransactionsAppUsed.push({ ...transaction, transactedUser: user });
            //     } catch (err: any) {
            //         throw new Error(err.message);
            //     }
            // })
            console.log("transactions", [...recievedTransactionsAppUsed, ...madeTransactionsAppUsed]);
            return [...recievedTransactionsAppUsed, ...madeTransactionsAppUsed];
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
    static async makeTransaction(token: string, transaction: Transaction) {
        try {
            console.log(transaction);
            const res = await instance.post(`/transactions`, {
                from: transaction.fromMobile,
                to: transaction.toMobile,
                date: transaction.createdAt,
                money: transaction.money
            }, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            })
            console.log(res);
        } catch (err: any) {
            console.warn(err);
            const error = err as Error;
            throw new Error(error.message);
        }
    }
}

export default TransactionService;