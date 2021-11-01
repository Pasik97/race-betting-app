import ApplicationState from 'store/ApplicationState';
import { RaceWithBet, Bet } from './constants';

export const getIsFetchingRaces = (state: ApplicationState): boolean => state.races.isFetching;

export const getRaces = (state: ApplicationState): Record<string,  RaceWithBet> => state.races.races;

export const getRacesOrder = (state: ApplicationState): number[] => state.races.order;

export const getRaceById = (state: ApplicationState, raceId: string): RaceWithBet | undefined => getRaces(state)[raceId];

export const getRaceActiveStatusById = (state: ApplicationState, raceId: string): boolean => !!getRaces(state)[raceId]?.active;

export const getRaceBetById = (state: ApplicationState, raceId: string): Bet | undefined => getRaceById(state, raceId)?.bet;

export const getRaceBetAmountById = (state: ApplicationState, raceId: string): number | undefined => getRaceBetById(state, raceId)?.amount;