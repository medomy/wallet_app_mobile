import { MobileNumUser, User } from "./user"

export type Transaction = {
    fromMobile: string,
    toMobile: string,
    createdAt: Date,
    money: number,
    recieved?: boolean
}

export type TransactionAppUsed = Transaction & {
    transactedUser: User | MobileNumUser
}