import { Race } from 'api/apiModels';
import ApplicationState from 'store/ApplicationState';

export const getisFetchingRaces = (state: ApplicationState): boolean => state.races.isFetching;

export const getRaces = (state: ApplicationState): Record<string,  Race> => state.races.races;

export const getRacesOrder = (state: ApplicationState): number[] => state.races.order;
