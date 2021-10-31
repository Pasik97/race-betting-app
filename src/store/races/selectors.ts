import { Race } from 'api/apiModels';
import ApplicationState from 'store/ApplicationState';

export const getisFetchingRaces = (state: ApplicationState): boolean | undefined => state.races.isFetching;

export const getRaces = (state: ApplicationState): Race[] | undefined => state.races.races;
