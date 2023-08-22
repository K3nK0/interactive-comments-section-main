import { configureStore } from "@reduxjs/toolkit"
import comment from "./features/comment"
import currentUser from "./features/currentUser"


export const store = configureStore({
    reducer: {
        comment,
        currentUser
    }
})