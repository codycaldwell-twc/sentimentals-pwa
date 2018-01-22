import { takeLatest } from 'redux-saga/effects';
import { toneAnalysisSaga } from './analysis.saga';
import * as constants from '../constants';

export default function* watchSubmitAnalysis() {
  yield takeLatest(constants.SUBMIT_ANALYSIS, toneAnalysisSaga);
}
