import { instance } from "../../network";
import AsyncStorageCache from "../asyncStorageCache/asyncStorage";

class UserService {
    static async signIn(mobile: string, password: string) {
        try {
            const res = await instance.post('/signIn', {
                mobile,
                password
            });
            await AsyncStorageCache.setUserAsync(res.data);
            return res.data;
        } catch (err) {
            throw new Error(`${err}`);
        }
    }
}

export default UserService;