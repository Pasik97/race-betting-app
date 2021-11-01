import { call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import * as A from './actions';
import * as C from './constants';
import * as api from 'api';
import { Participant } from "api/apiModels";

export function* getParticipantsWorker() {
   try {
      const { data }: AxiosResponse<Participant[]> = yield call(api.getParticipants);

      yield put(A.getParticipantsSuccess(data));
   } catch (error: any) {
      yield put(A.getParticipantsFail(error));
   }
}

export function* participantsWatcher() {
   yield takeLatest(C.ParticipantsActionType.GetParticipantsRequest, getParticipantsWorker);
}
