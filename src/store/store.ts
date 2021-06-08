import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { personDetailReducer } from "Components/Views/PersonDetail";
import { swApi } from "services/swApi";

export const store = configureStore({
  reducer: {
    [swApi.reducerPath]: swApi.reducer,

    personDetail: personDetailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(swApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
