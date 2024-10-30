import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./authUsersSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ authUsers: userReducer });

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["authUsers"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
