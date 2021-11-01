import { Participant } from 'api/apiModels';
import ApplicationState from 'store/ApplicationState';

export const getIsFetchingParticipants = (state: ApplicationState): boolean => state.participants.isFetching;

export const getParticipantsEmptyStatus = (state: ApplicationState): boolean => !Object.values(state.participants.participants).length;

export const getParticipantById = (state: ApplicationState, id: number): Participant | undefined => state.participants.participants[id];
