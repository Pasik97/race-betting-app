import { call, CallEffect, put, PutEffect, takeLatest } from 'redux-saga/effects';
import * as M from './mockData';
import * as S from '../sagas';
import * as C from '../constants';
import * as A from '../actions';
import * as api from 'api';
import { mockError } from 'utils/constant';

describe('racesWatcher', () => {
   it('flow of watcher', () => {
      const saga = S.racesWatcher();
      let expected = takeLatest(C.RaceActionType.GetRacesRequest, S.getRacesWorker);
      let actual = saga.next().value;

      expect(actual).toEqual(expected);

      expected = takeLatest(C.RaceActionType.GetRaceByIdRequest, S.getRaceByIdWorker);
      actual = saga.next().value;

      expect(actual).toEqual(expected);

      expect(saga.next().done).toEqual(true);
   });
});

describe('getRacesWorker', () => {
   let saga: Generator<CallEffect | PutEffect | void>;
   let expected: CallEffect | PutEffect | void;
   let actual: CallEffect | PutEffect | void;

   beforeEach(() => {
      saga = S.getRacesWorker();
   })

   it('flow of success scenario', () => {
      expected = call(api.getRaces);
      actual = saga.next().value;

      expect(actual).toEqual(expected);

      expected = put(A.getRacesSuccess(M.mockRaces));
      actual = saga.next({ data: M.mockRaces }).value;

      expect(actual).toEqual(expected);

      expect(saga.next().done).toEqual(true);
   });

   it('flow of fail scenario', () => {
      saga.next();

      expected = put(A.getRacesFail(mockError));
      actual = saga.throw(mockError).value;

      expect(actual).toEqual(expected);

      expect(saga.next().done).toEqual(true);
   });
});

describe('getRaceByIdWorker', () => {
   let saga: Generator<CallEffect | PutEffect | void>;
   let expected: CallEffect | PutEffect | void;
   let actual: CallEffect | PutEffect | void;

   beforeEach(() => {
      saga = S.getRaceByIdWorker(A.getRaceByIdRequest(M.mockId));
   })

   it('flow of success scenario', () => {
      expected = call(api.getRaceById, M.mockId);
      actual = saga.next().value;

      expect(actual).toEqual(expected);

      expected = put(A.getRaceByIdSuccess(M.mockRace));
      actual = saga.next({ data: M.mockRace }).value;

      expect(actual).toEqual(expected);

      expect(saga.next().done).toEqual(true);
   });

   it('flow of fail scenario', () => {
      saga.next();

      expected = put(A.getRaceByIdFail(mockError));
      actual = saga.throw(mockError).value;

      expect(actual).toEqual(expected);

      expect(saga.next().done).toEqual(true);
   });
});
