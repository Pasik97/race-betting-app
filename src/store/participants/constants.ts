import { AxiosError } from 'axios';
import { Participant } from 'api/apiModels';

export enum ParticipantsActionType {
   GetParticipantsRequest = 'participants/GET_PARTICIPANTS_REQUEST',
   GetParticipantsSuccess = 'participants/GET_PARTICIPANTS_SUCCESS',
   GetParticipantsFail = 'participants/GET_PARTICIPANTS_FAIL',
}

export interface ParticipantsState {
   isFetching: boolean;
   participants: Participant[];
}

export const initilParticipantsState: ParticipantsState = {
   isFetching: false,
   participants: [],
};

export type ParticipantsAction = {
   type: ParticipantsActionType.GetParticipantsRequest;
} | {
   type: ParticipantsActionType.GetParticipantsSuccess;
   participants: Participant[];
} | {
   type: ParticipantsActionType.GetParticipantsFail;
   error: AxiosError;
};
