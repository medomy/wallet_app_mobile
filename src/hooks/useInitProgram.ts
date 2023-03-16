import { useDispatch } from "react-redux";
import AsyncStorageCache from "../services/asyncStorageCache/asyncStorage";
import { setUserToken } from "../store/userSlice";
import { useEffect } from "react";

export function useInitProgram() {
    const dispatch = useDispatch();
    async function setData() {
        const token = await AsyncStorageCache.getUserAsyncStorage();
        if (token) dispatch(setUserToken(token));
    }

    useEffect(() => {
        setData();
    }, []);
}