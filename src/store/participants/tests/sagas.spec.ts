import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import * as M from './mockData';
import * as S from '../sagas';
import * as C from '../constants';
import * as A from '../actions';
import * as api from 'api';
import { mockError } from 'utils/constant';

describe('participantsWatcher', () => {
   it('flow of watcher', () => {
      const saga = S.participantsWatcher();
      const expected = takeLatest(C.ParticipantsActionType.GetParticipantsRequest, S.getParticipantsWorker);
      const actual = saga.next().value;

      expect(actual).toEqual(expected);

      expect(saga.next().done).toEqual(true);
   });
});

describe('getParticipantsWorker', () => {
   let saga: Generator<CallEffect | PutEffect | void>;
   let expected: CallEffect | PutEffect | void;
   let actual: CallEffect | PutEffect | void;

   beforeEach(() => {
      saga = S.getParticipantsWorker();
   })

   it('flow of success scenario', () => {
      expected = call(api.getParticipants);
      actual = saga.next().value;

      expect(actual).toEqual(expected);

      expected = put(A.getParticipantsSuccess(M.mockParticipants));
      actual = saga.next({ data: M.mockParticipants }).value;

      expect(actual).toEqual(expected);

      expect(saga.next().done).toEqual(true);
   });

   it('flow of fail scenario', () => {
      saga.next();

      expected = put(A.getParticipantsFail(mockError));
      actual = saga.throw(mockError).value;

      expect(actual).toEqual(expected);

      expect(saga.next().done).toEqual(true);
   });
});
