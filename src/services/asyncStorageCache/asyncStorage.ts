import AsyncStorage from "@react-native-async-storage/async-storage"
import { AsyncKeys } from "./storageKeys"

class AsyncStorageCache {
    static async getUserAsyncStorage() {
        try {
            const user = await AsyncStorage.getItem(AsyncKeys.USER_TOKEN);
            return user;
        } catch (err: any) {
            throw new Error(`could not get from async , ${err.message}`)
        }
    }

    static async setUserAsync(token: string) {
        try {
            await AsyncStorage.setItem(AsyncKeys.USER_TOKEN, token);
        } catch (err: any) {
            throw new Error(`could not set from async , ${err.message}`);
        }
    }
}

export default AsyncStorageCache;