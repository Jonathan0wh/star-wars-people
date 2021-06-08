import { combineReducers } from "redux";
import { swApi } from "services/swApi";

export const rootReducer = combineReducers({
  [swApi.reducerPath]: swApi.reducer,
});
