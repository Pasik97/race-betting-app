import { Participant } from "api/apiModels";

export const transformParticipantsToParticipantsState = (participantsToTransform: Participant[]): Record<string, Participant> => participantsToTransform.reduce(
    (acc: Record<string, Participant>, participant) => ({
        ...acc,
        [participant.id]: participant,
    }),
    {},
);
