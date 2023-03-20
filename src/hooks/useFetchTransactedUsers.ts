import { useEffect, useState } from "react";
import { MobileNumUser, User } from "../types/user";
import UserService from "../services/user/userService";
import AsyncStorageCache from "../services/asyncStorageCache/asyncStorage";

export function useFetchTransactedUsers(user: User | null) {
    const [transactedUsers, setTransactedUsers] = useState<(MobileNumUser | null)[]>([]);
    async function getData() {
        if (user !== null) {
            try {
                const token = await AsyncStorageCache.getUserAsyncStorage();
                const users = await UserService.getRecentlyTransctedUsers(user.mobileNumber, token!);
                setTransactedUsers(users);
            } catch (err: any) {
                console.warn(err.message);
            }
        }
    }
    useEffect(() => {
        getData();
    }, [user]);
    return {
        transactedUsers
    }
}