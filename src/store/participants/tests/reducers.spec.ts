import * as M from './mockData';
import { initilParticipantsState, ParticipantsActionType } from '../constants';
import * as A from '../actions';
import participantsReducer from '../reducers';
import * as H from '../helpers';
import { mockError } from 'utils/constant';

describe('participantsReducer', () => {
   it(`should set isFetching value to true if received ${ParticipantsActionType.GetParticipantsRequest} action type`, () => {
      expect(participantsReducer(initilParticipantsState, A.getParticipantsRequest())).toEqual(
         { ...initilParticipantsState, isFetching: true },
      );
   });

   it(`should call transformParticipantsToParticipantsState function if received ${ParticipantsActionType.GetParticipantsSuccess} action type`, () => {
      const transformParticipantsToParticipantsStateSpy = jest.spyOn(H, 'transformParticipantsToParticipantsState');

      participantsReducer(initilParticipantsState, A.getParticipantsSuccess(M.mockParticipants));

      expect(transformParticipantsToParticipantsStateSpy).toHaveBeenCalled();

      transformParticipantsToParticipantsStateSpy.mockRestore();
   });

   it(`should set participants field value and set isFetching value to false if received ${ParticipantsActionType.GetParticipantsSuccess} action type`, () => {
      expect(participantsReducer({ ...initilParticipantsState, isFetching: true }, A.getParticipantsSuccess(M.mockParticipants))).toEqual(
         { ...initilParticipantsState, isFetching: false, participants: M.transformedParticipants },
      );
   });

   it(`should set isFetching value to false if received ${ParticipantsActionType.GetParticipantsFail} action type`, () => {
      expect(participantsReducer({ ...initilParticipantsState, isFetching: true }, A.getParticipantsFail(mockError))).toEqual(
         { ...initilParticipantsState, isFetching: false },
      );
   });

   it('should return current state if received action with unknown type', () => {
      expect(participantsReducer(initilParticipantsState, {} as any)).toEqual(initilParticipantsState);
   });

   it('should return initial state if received undefined as state value', () => {
      expect(participantsReducer(undefined, {} as any)).toEqual(initilParticipantsState);
   });
});
