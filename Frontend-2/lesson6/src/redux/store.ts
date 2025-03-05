import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import loggerMiddleware from "./middleware";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const persistConfig = {
    key: "root",
    storage,
};

export const persistedReducer = persistReducer(persistConfig, counterReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    { serializableCheck: {
      ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],},}
  ).concat(loggerMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;