import { useEffect, useState } from "react";
import { MobileNumUser, User } from "../types/user";
import UserService from "../services/user/userService";
import AsyncStorageCache from "../services/asyncStorageCache/asyncStorage";
import { TransactionAppUsed } from "../types/transaction";
import TransactionService from "../services/transactions/transactions";

export function useFetchTransactedUsers(user: User | null) {
    const [transactedUsers, setTransactedUsers] = useState<(MobileNumUser | null)[]>([]);
    const [transactions, setTransactions] = useState<TransactionAppUsed[]>([]);
    const [loading2, setLoading2] = useState<boolean>(false);
    async function getData() {
        if (user !== null) {
            try {
                setLoading2(true);
                const token = await AsyncStorageCache.getUserAsyncStorage();
                const users = await UserService.getRecentlyTransctedUsers(user.mobileNumber, token!);
                setTransactedUsers(users);
                const _transactions = await TransactionService.getUserTransactions(user.mobileNumber, token!);
                setTransactions(_transactions);
                setLoading2(false);
            } catch (err: any) {
                setLoading2(false);
                console.warn(err.message);
            }
        }
    }
    useEffect(() => {
        getData();
    }, [user]);
    return {
        transactedUsers,
        transactions,
        loading2
    }
}