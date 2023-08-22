import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "juliusomo",
    photoProfile: "./avatars/image-juliusomo.webp"
}

export const currentUser = createSlice({
    name: "currentUser",
    initialState
})

export default currentUser.reducer