import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface UserSlice {
    userToken: string | null,
    isSigned: boolean
}

const initialState: UserSlice = {
    userToken: null,
    isSigned: false
}

const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserToken: (state, payLoad: PayloadAction<string>) => {
            state.userToken = payLoad.payload;
            if (state.userToken !== null) state.isSigned = true;
        }
    }
})

export const { setUserToken } = slice.actions;
export default slice.reducer;