import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    show: false
}

export const showModal = createSlice({
    name: "showModal",
    initialState,
    reducers: {
        handleModal: (state, action) => {
            state.show = action.payload
        }
    }
})

export const {handleModal} = showModal.actions
export default showModal.reducer