import * as C from './constants';

const participantsReducer = (state: C.ParticipantsState = C.initilParticipantsState, action: C.ParticipantsAction): C.ParticipantsState => {
   switch (action.type) {
      case C.ParticipantsActionType.GetParticipantsRequest:
         return {
            ...state,
            isFetching: true,
         }
      case C.ParticipantsActionType.GetParticipantsSuccess:
         return {
            participants: action.participants,
            isFetching: false,
         }
      case C.ParticipantsActionType.GetParticipantsFail:
         return {
            ...state,
            isFetching: false,
         }
      default:
         return state;
   }
}

export default participantsReducer;
