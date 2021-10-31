import { AxiosError } from 'axios';
import { Race } from 'api/apiModels';

export enum RaceActionType {
   GetRacesRequest = 'race/GET_RACES_REQUEST',
   GetRacesSuccess = 'race/GET_RACES_SUCCESS',
   GetRacesFail = 'race/GET_RACES_FAIL',
}

export interface RacesState {
   isFetching?: boolean;
   races?: Race[];
}

export type RacesAction = {
   type: RaceActionType.GetRacesRequest;
} | {
   type: RaceActionType.GetRacesSuccess;
   races: Race[];
} | {
   type: RaceActionType.GetRacesFail;
   error: AxiosError;
};
