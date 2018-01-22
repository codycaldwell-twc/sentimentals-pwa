import { put, call } from 'redux-saga/effects';
import get from 'lodash/get';
import { analyze } from '../api';
import * as constants from '../constants';

export function* toneAnalysisSaga({ payload }) {
  try {
    const analysis = yield call(analyze, payload);
    yield put({ type: constants.ANALYSIS_SUCCESS, payload: analysis });
  } catch (error) {
    yield put({ type: constants.ANALYSIS_FAILURE, error });
  }
}
