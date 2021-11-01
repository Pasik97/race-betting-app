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
            ...transformRacesToRacesState(state.races, action.races),
            isFetching: false,
         }
      case C.RaceActionType.GetRaceByIdSuccess:
         const order = state.races[action.race.id] ? state.order : [...state.order, action.race.id];
         const races: Record<string, C.RaceWithBet> = state.races[action.race.id] ?
            { ...state.races, [action.race.id]: { ...state.races[action.race.id], ...action.race } }
            : { ...state.races, [action.race.id]: action.race };

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
      case C.RaceActionType.SetRaceBetAmount:
         const newRaceBet: C.Bet = state.races[action.raceId]?.bet
            ? { ...state.races[action.raceId].bet, amount: action.amount }
            : { amount: action.amount };

         return {
            ...state,
            races: {
               ...state.races,
               [action.raceId]: {
                  ...state.races[action.raceId],
                  bet: newRaceBet,
               },
            },
         }
      default:
         return state;
   }
}

export default racesReducer;
