import { AxiosError } from 'axios';
import { Participant } from 'api/apiModels';
import * as C from './constants';

export const getParticipantsRequest = (): Extract<C.ParticipantsAction, { type: C.ParticipantsActionType.GetParticipantsRequest }> => ({
   type: C.ParticipantsActionType.GetParticipantsRequest,
});

export const getParticipantsSuccess = (participants: Participant[]): Extract<C.ParticipantsAction, { type: C.ParticipantsActionType.GetParticipantsSuccess }> => ({
   type: C.ParticipantsActionType.GetParticipantsSuccess,
   participants,
});

export const getParticipantsFail = (error: AxiosError): Extract<C.ParticipantsAction, { type: C.ParticipantsActionType.GetParticipantsFail }> => ({
   type: C.ParticipantsActionType.GetParticipantsFail,
   error,
});
