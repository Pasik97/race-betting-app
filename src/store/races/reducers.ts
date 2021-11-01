import * as C from './constants';
import * as H from './helpers';

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
            ...H.transformRacesToRacesState(state.races, action.races),
            isFetching: false,
         }
      case C.RaceActionType.GetRaceByIdSuccess:
         const { races, order } = H.getUpdatedRacesAndOrder(state, action.race);

         return {
            ...state,
            races,
            order,
            isFetching: false,
         }
      case C.RaceActionType.SetRaceBetAmount:
         const betUpdatedAmount: C.Bet = H.createBetWithUpdatedAmount(
            state.races[action.raceId]?.bet,
            action.amount,
         );

         return {
            ...state,
            races: {
               ...state.races,
               [action.raceId]: {
                  ...state.races[action.raceId],
                  bet: betUpdatedAmount,
               },
            },
         }
      case C.RaceActionType.SetRaceBetPlace:
         const betUpdatedPlaces: C.Bet = H.createBetWithUpdatedPlace(
            state.races[action.raceId]?.bet,
            action.place,
            action.participantId
         );

         return {
            ...state,
            races: {
               ...state.races,
               [action.raceId]: {
                  ...state.races[action.raceId],
                  bet: betUpdatedPlaces,
               },
            },
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
