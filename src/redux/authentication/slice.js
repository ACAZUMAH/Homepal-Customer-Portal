import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: true,
}

const slice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        update: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

export default slice.reducer

export const authenticationActions = slice.actions