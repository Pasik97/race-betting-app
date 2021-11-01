import { all } from 'redux-saga/effects';
import { participantsWatcher } from './participants/sagas';
import { racesWatcher } from './races/sagas';

export default function* rootSaga() {
   yield all([
      racesWatcher(),
      participantsWatcher(),
   ]);
};
