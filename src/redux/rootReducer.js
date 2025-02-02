import { combineReducers } from "@reduxjs/toolkit";
import authentication from "./authentication/slice"

export const rootReducer = combineReducers({
    authentication,
})
