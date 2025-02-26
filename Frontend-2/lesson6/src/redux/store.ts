import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import loggerMiddleware from "./middleware";

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