import { combineReducers } from "redux";
import peopleReducer from "Components/Views/PeopleTable";

export const rootReducer = combineReducers({
  people: peopleReducer,
});
