import { useEffect, useState } from "react";
import { MobileNumUser, User } from "../types/user";
import UserService from "../services/user/userService";

export function useFetchTransactedUsers(user: User | null) {
    const [transactedUsers, setTransactedUsers] = useState<(MobileNumUser | null)[]>([]);
    async function getData() {
        if (user) {
            try {
                const users = await UserService.getRecentlyTransctedUsers(user.mobileNumber);
                setTransactedUsers(users);
            } catch (err: any) {
                throw new Error(`${err.message}`);
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