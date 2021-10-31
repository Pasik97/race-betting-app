import { combineReducers } from "redux";
import initReducer from "./Initial/reducers";

const reducers = combineReducers({
   init: initReducer,
})

export default reducers;
