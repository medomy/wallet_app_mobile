import { instance } from "../../network";
import { Transaction } from "../../types/transaction";
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
    static async getUserByMobile(mobile: string, token: string): Promise<MobileNumUser> {
        try {
            const res = await instance.get(`/usersMobile/${mobile}`, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            });
            console.log(res.data);
            if (res.data.error) throw new Error(res.data.error);
            return res.data;
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
    static async getRecentlyTransctedUsers(mobile: string, token: string): Promise<(MobileNumUser | null)[]> {
        try {
            const Transres = await instance.get(`/transactionsMade/${mobile}`, {
                headers: {
                    Authorization: `bearer ${token}`
                }
            });
            console.log(Transres.data);
            if (Transres.data.error) throw new Error(Transres.data.error);
            let transectedUsers: MobileNumUser[] = [];
            for (let i = 0; i < Transres.data.length; i++) {
                const user = await this.getUserByMobile(Transres.data[i].toMobile, token);
                if (transectedUsers.find((usr) => usr.id === user.id) === undefined) transectedUsers.push(user);
            }
            console.log(transectedUsers);
            return [null, ...transectedUsers];
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
}

export default UserService;