import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["notifications"],
  debug: true
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE]
        }
    })
  },
  devTools: import.meta.env.NODE_ENV !== "production"
});

export const persistor = persistStore(store);

export default store;
