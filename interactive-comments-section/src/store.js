import { configureStore } from "@reduxjs/toolkit"
import comment from "./features/comment"
import currentUser from "./features/currentUser"
import showModal from "./features/modalDelete"
import deleteComment from "./features/deleteComment"


export const store = configureStore({
    reducer: {
        comment,
        currentUser,
        showModal,
        deleteComment
    }
})