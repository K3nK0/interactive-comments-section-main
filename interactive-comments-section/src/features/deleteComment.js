import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comment: {
        id: "",
        foo: ""
    }
}

export const deleteComment = createSlice({
    name: "delComment",
    initialState,
    reducers: {
        getID: (state, action) => {
            state.comment.id = action.payload
        },
        getFoo: (state, action) => {
            state.comment.foo = action.payload
        }
    }
})

export const {getID, getFoo} = deleteComment.actions
export default deleteComment.reducer