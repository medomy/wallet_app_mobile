import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { MobileNumUser, User } from '../../types/user'


interface UserSlice {
    userToken: string | null,
    isSigned: boolean,
    user: User | MobileNumUser | null
}

const initialState: UserSlice = {
    userToken: null,
    isSigned: false,
    user: null
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserToken: (state, payLoad: PayloadAction<string>) => {
            state.userToken = payLoad.payload;
            if (state.userToken !== null) state.isSigned = true;
        },
        setGlobalUser: (state, payload: PayloadAction<User | MobileNumUser | null>) => {
            state.user = payload.payload;
        }
    }
})

export const { setUserToken, setGlobalUser } = slice.actions;
export default slice.reducer;