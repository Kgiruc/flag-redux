import { createSlice } from "@reduxjs/toolkit"

const initalStateValue={name: '',email: '',age:''}

const userSlice = createSlice({
    name: "user",
    initialState: {value: initalStateValue},
    reducers: {
        login: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {login} = userSlice.actions;
export default userSlice.reducer