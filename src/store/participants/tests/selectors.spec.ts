import * as M from './mockData';
import * as S from '../selectors';
import { mockApplicationState } from 'utils/constant';

describe('getIsFetchingParticipants', () => {
   it('should return isFetching field value', () => {
      expect(S.getIsFetchingParticipants(M.mockParticipantsState)).toEqual(M.mockParticipantsState.participants.isFetching);
   });
});

describe('getParticipantsEmptyStatus', () => {
   it('should return true if participants field value is empty object', () => {
      expect(S.getParticipantsEmptyStatus(mockApplicationState)).toEqual(true);
   });

   it('should return false if participants field value is not an empty object', () => {
      expect(S.getParticipantsEmptyStatus(M.mockParticipantsState)).toEqual(false);
   });
});

describe('getParticipantById', () => {
   it('should return participant with id equal to received id', () => {
      const participant = S.getParticipantById(M.mockParticipantsState, M.mockParticipant.id);

      expect(participant).toEqual(M.mockParticipant);
      expect(participant?.id).toEqual(M.mockParticipant.id);
   });

   it('should return undefined if participant with id equal to received id does not exist', () => {
      const participant = S.getParticipantById(M.mockParticipantsState, 999999);

      expect(participant).toBeUndefined();
   });
});
