import { Participant } from 'api/apiModels';
import ApplicationState from 'store/ApplicationState';

export const getIsFetchingParticipants = (state: ApplicationState): boolean => state.participants.isFetching;

export const getParticipants = (state: ApplicationState): Participant[] => state.participants.participants;
