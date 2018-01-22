import { fork } from 'redux-saga/effects';
import watchSubmitAnalysis from './watcher';

export default function* startSagas() {
  yield fork(watchSubmitAnalysis);
}
