import { Participant } from "api/apiModels";
import ApplicationState from "store/ApplicationState";
import { mockApplicationState } from "utils/constant";

export const mockParticipant: Participant = {
   id: 1,
   body: 'mock body',
}

export const mockParticipants: Participant[] = [mockParticipant];

export const transformedParticipants: Record<string, Participant> = {
   [mockParticipant.id]: mockParticipant,
}

export const mockParticipantsState: ApplicationState = {
   ...mockApplicationState,
   participants: {
      isFetching: false,
      participants: transformedParticipants,
   },
};
