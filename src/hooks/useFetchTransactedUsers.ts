import { useEffect, useState } from "react";
import { MobileNumUser, User } from "../types/user";
import UserService from "../services/user/userService";
import AsyncStorageCache from "../services/asyncStorageCache/asyncStorage";
import { TransactionAppUsed } from "../types/transaction";
import TransactionService from "../services/transactions/transactions";

export function useFetchTransactedUsers(user: User | null) {
    const [transactedUsers, setTransactedUsers] = useState<(MobileNumUser | null)[]>([]);
    const [transactions, setTransactions] = useState<TransactionAppUsed[]>([]);
    async function getData() {
        if (user !== null) {
            try {
                const token = await AsyncStorageCache.getUserAsyncStorage();
                const users = await UserService.getRecentlyTransctedUsers(user.mobileNumber, token!);
                setTransactedUsers(users);
                const _transactions = await TransactionService.getUserTransactions(user.mobileNumber, token!);
                setTransactions(_transactions);
            } catch (err: any) {
                console.warn(err.message);
            }
        }
    }
    useEffect(() => {
        getData();
    }, [user]);
    return {
        transactedUsers,
        transactions
    }
}