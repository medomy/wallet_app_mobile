import { useEffect, useState } from "react";
import { User } from "../types/user";
import UserService from "../services/user/userService";
import AsyncStorageCache from "../services/asyncStorageCache/asyncStorage";

export function useFetchUserData() {
    const [user, setUser] = useState<User | null>(null);
    const [refreshed, setRefreshed] = useState<boolean>(false);
    const [errMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    async function getData() {
        try {
            setLoading(true);
            const token = await AsyncStorageCache.getUserAsyncStorage();
            const _user = await UserService.getUserById(token ?? "");
            setUser(_user);
            setLoading(false);
        } catch (err: any) {
            setLoading(false);
            setErrorMessage(err.message);
        }
    }
    useEffect(() => {
        console.log("called");
        getData();
    }, [refreshed])

    return {
        user,
        setRefreshed,
        errMessage,
        loading
    }
}