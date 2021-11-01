import * as C from './constants';
import { transformRacesToRacesState } from './helpers';

const racesReducer = (state: C.RacesState = C.initilRacesState, action: C.RacesAction): C.RacesState => {
   switch (action.type) {
      case C.RaceActionType.GetRacesRequest:
      case C.RaceActionType.GetRaceByIdRequest:
         return {
            ...state,
            isFetching: true,
         }
      case C.RaceActionType.GetRacesSuccess:
         return {
            ...state,
            ...transformRacesToRacesState(action.races),
            isFetching: false,
         }
      case C.RaceActionType.GetRaceByIdSuccess:
         const races = { ...state.races, [action.race.id]: action.race };
         const order = [...state.order, action.race.id];

         return {
            ...state,
            races,
            order,
            isFetching: false,
         }
      case C.RaceActionType.GetRacesFail:
      case C.RaceActionType.GetRaceByIdFail:
         return {
            ...state,
            isFetching: false,
         }
      default:
         return state;
   }
}

export default racesReducer;
