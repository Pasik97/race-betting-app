import { createStore } from "redux";
import { RacesState } from "store/races/constants";
import reducers from "store/reducers";

export const createMockRaceStore = (racesState: RacesState) => createStore(reducers, { races: racesState });
