import ApplicationState from 'store/ApplicationState';
import { RaceWithBet } from './constants';

export const getIsFetchingRaces = (state: ApplicationState): boolean => state.races.isFetching;

export const getRaces = (state: ApplicationState): Record<string,  RaceWithBet> => state.races.races;

export const getRaceById = (state: ApplicationState, raceId: string): RaceWithBet | undefined => state.races.races[raceId];

export const getRacesOrder = (state: ApplicationState): number[] => state.races.order;

export const getRaceBetAmount = (state: ApplicationState, raceId: string): number | undefined => getRaceById(state, raceId)?.bet?.amount;