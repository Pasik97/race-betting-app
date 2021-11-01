import { Participant } from 'api/apiModels';
import ApplicationState from 'store/ApplicationState';

export const getIsFetchingParticipants = (state: ApplicationState): boolean => state.participants.isFetching;

export const getParticipantsEmptyStatus = (state: ApplicationState): boolean => !!Object.values(state.participants.participants);

export const getParticipantById = (state: ApplicationState, id: string): Participant | undefined => state.participants.participants[id];
