export type User = {
    name: string,
    mobileNumber: string,
    balance: number,
    profilePic: string,
    role: "admin" | "user",
    id: string,
    _id: string
}

export type JwtPayload = {
    user: User,
    iat: number
}

export type MobileNumUser = {
    name: string,
    mobileNumber: string,
    profile: string
}