import { combineReducers } from "redux";
import participantsReducer from "./participants/reducers";
import racesReducer from "./races/reducers";

const reducers = combineReducers({
   races: racesReducer,
   participants: participantsReducer,
})

export default reducers;
