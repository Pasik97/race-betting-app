import { all } from 'redux-saga/effects';
import { racesWatcher } from './races/sagas';

export default function* rootSaga() {
   yield all([
      racesWatcher(),
   ]);
};
