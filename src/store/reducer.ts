import { combineReducers } from "@reduxjs/toolkit";
import { personDetailReducer } from "Components/Views/PersonDetail";
import { swApi } from "services/swApi";

export const rootReducer = combineReducers({
  // API Reducers
  [swApi.reducerPath]: swApi.reducer,

  // Component Reducers
  personDetail: personDetailReducer,
});
