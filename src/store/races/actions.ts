import { AxiosError } from 'axios';
import { Race } from 'api/apiModels';
import * as C from './constants';

export const getRacesRequest = (): Extract<C.RacesAction, { type: C.RaceActionType.GetRacesRequest }> => ({
   type: C.RaceActionType.GetRacesRequest,
});

export const getRacesSuccess = (races: Race[]): Extract<C.RacesAction, { type: C.RaceActionType.GetRacesSuccess }> => ({
   type: C.RaceActionType.GetRacesSuccess,
   races,
});

export const getRacesFail = (error: AxiosError): Extract<C.RacesAction, { type: C.RaceActionType.GetRacesFail }> => ({
   type: C.RaceActionType.GetRacesFail,
   error,
});

export const getRaceByIdRequest = (raceId: string): Extract<C.RacesAction, { type: C.RaceActionType.GetRaceByIdRequest }> => ({
   type: C.RaceActionType.GetRaceByIdRequest,
   raceId,
});

export const getRaceByIdSuccess = (race: Race): Extract<C.RacesAction, { type: C.RaceActionType.GetRaceByIdSuccess }> => ({
   type: C.RaceActionType.GetRaceByIdSuccess,
   race,
});

export const getRaceByIdFail = (error: AxiosError): Extract<C.RacesAction, { type: C.RaceActionType.GetRaceByIdFail }> => ({
   type: C.RaceActionType.GetRaceByIdFail,
   error,
});

export const setRaceBetAmount = (raceId: string, amount: number): Extract<C.RacesAction, { type: C.RaceActionType.SetRaceBetAmount }> => ({
   type: C.RaceActionType.SetRaceBetAmount,
   raceId,
   amount,
});

export const setRaceBetPlace = (raceId: string, place: C.Places, participantId: number): Extract<C.RacesAction, { type: C.RaceActionType.SetRaceBetPlace }> => ({
   type: C.RaceActionType.SetRaceBetPlace,
   raceId,
   place,
   participantId,
});
