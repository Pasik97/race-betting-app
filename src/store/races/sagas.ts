import { call, put, takeLatest } from "redux-saga/effects";
import * as A from './actions';
import * as C from './constants';
import * as api from 'api';

export function* getRacesWorker() {
   try {
      const { data } = yield call(api.getRaces);

      yield put(A.getRacesSuccess(data));      
   } catch (error: any) {
      yield put(A.getRacesFail(error));
   }
}

export function* racesWatcher() {
   yield takeLatest(C.RaceActionType.GetRacesRequest, getRacesWorker);
}
