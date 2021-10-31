import { combineReducers } from "redux";
import racesReducer from "./races/reducers";

const reducers = combineReducers({
   races: racesReducer,
})

export default reducers;
