import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/ApiSlice";
import authRedcuer from "../features/auth/AuthSlice"


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authRedcuer 
    },
    middleware: getDeafultMiddleware =>
        getDeafultMiddleware().concat(apiSlice.middleware),
    devTools: true
})