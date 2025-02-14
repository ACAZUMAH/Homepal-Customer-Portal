import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
}

const slice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggle: (state, action) => {
            const propertyId = action.payload
            const index = state.favorites.indexOf(propertyId)
            if(index === -1){
                state.favorites.push(propertyId)
            }else{
                state.favorites.splice(index, 1)
            }
        }
    }
})

export const favoritesActions = slice.actions

export default slice.reducer