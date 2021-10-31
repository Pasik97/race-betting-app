import { all } from 'redux-saga/effects';
import { initWatcher } from './Initial/sagas';

export default function* rootSaga() {
   yield all([
      initWatcher(),
   ]);
};
