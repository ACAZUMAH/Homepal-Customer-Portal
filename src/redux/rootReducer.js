import { combineReducers } from "@reduxjs/toolkit";
import authentication from "./authentication/slice"
import favorites from "./favorite/slice"

export const rootReducer = combineReducers({
    authentication,
    favorites
})
