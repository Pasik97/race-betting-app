import { takeLatest } from 'redux-saga/effects';

function* init() {
   console.log('initial saga')
};

export function* initWatcher() {
   yield takeLatest('action', init);
};
