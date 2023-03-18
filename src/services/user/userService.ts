import { instance } from "../../network";
import { JwtPayload, MobileNumUser, User } from "../../types/user";
import AsyncStorageCache from "../asyncStorageCache/asyncStorage";
import jwtDecode from "jwt-decode";
class UserService {
    static async signIn(mobile: string, password: string) {
        try {
            const res = await instance.post('/signIn', {
                mobile,
                password
            });
            if (res.data.error) throw new Error(res.data.error);
            await AsyncStorageCache.setUserAsync(res.data);
            return res.data;
        } catch (err: any) {
            throw new Error(`${err.message}`);
        }
    }
    private static decodeTokenAndGetId(token: string) {
        const payload = jwtDecode(token) as JwtPayload;
        return payload.user.id;
    }
    static async getUserById(token: string): Promise<User> {
        try {
            const res = await instance.get(`/users/${this.decodeTokenAndGetId(token)}`, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            });
            if (res.data.error) throw new Error(res.data.error);
            return res.data;
        } catch (err: any) {
            throw new Error(`${err.message}`)
        }
    }
    static async getUserByMobile(mobile: string): Promise<MobileNumUser> {
        try {
            const res = await instance.get(`/users/${mobile}`);
            if (res.data.error) throw new Error(res.data.error);
            return res.data;
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}

export default UserService;