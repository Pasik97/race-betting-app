import * as C from './constants';

const racesReducer = (state: C.RacesState = {}, action: C.RacesAction): C.RacesState => {
   switch (action.type) {
      case C.RaceActionType.GetRacesRequest:
         return {
            ...state,
            isFetching: true,
         }
      case C.RaceActionType.GetRacesSuccess:
         return {
            ...state,
            races: action.races,
         }
      case C.RaceActionType.GetRacesFail:
         return {
            ...state,
            isFetching: false,
         }
      default:
         return state;
   }
}

export default racesReducer;
