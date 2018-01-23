import { put, call, select } from 'redux-saga/effects';
import { analyze } from '../api';
import {
  profilesSelector,
  newDocumentSelector,
  enableSentenceLevelSelector,
} from '../selectors';
import * as constants from '../constants';

export function* toneAnalysisSaga() {
  try {
    const profile_docs = yield select(profilesSelector);
    const new_doc = yield select(newDocumentSelector);
    const sentence_level = yield select(enableSentenceLevelSelector);
    const analysis = yield call(analyze, {
      profile_docs: profile_docs.map(profile => ({ text: profile })),
      new_doc: { text: new_doc },
      comparison_level: sentence_level ? 'sentence' : 'document',
    });
    yield put({ type: constants.ANALYSIS_SUCCESS, payload: analysis });
  } catch (error) {
    yield put({ type: constants.ANALYSIS_FAILURE, error });
  }
}
