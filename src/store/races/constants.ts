import { AxiosError } from 'axios';
import { Race } from 'api/apiModels';

export enum RaceActionType {
   GetRacesRequest = 'races/GET_RACES_REQUEST',
   GetRacesSuccess = 'races/GET_RACES_SUCCESS',
   GetRacesFail = 'races/GET_RACES_FAIL',
   GetRaceByIdRequest = 'races/GET_RACE_BY_ID_REQUEST',
   GetRaceByIdSuccess = 'races/GET_RACE_BY_ID_SUCCESS',
   GetRaceByIdFail = 'races/GET_RACE_BY_ID_FAIL',
}

export interface RacesState {
   isFetching: boolean;
   races: Record<string, Race>;
   order: number[];
}

export const initilRacesState: RacesState = {
   isFetching: false,
   races: {},
   order: [],
};

export type RacesAction = {
   type: RaceActionType.GetRacesRequest;
} | {
   type: RaceActionType.GetRacesSuccess;
   races: Race[];
} | {
   type: RaceActionType.GetRacesFail;
   error: AxiosError;
} | {
   type: RaceActionType.GetRaceByIdRequest;
   raceId: string;
} | {
   type: RaceActionType.GetRaceByIdSuccess;
   race: Race;
} | {
   type: RaceActionType.GetRaceByIdFail;
   error: AxiosError;
};
