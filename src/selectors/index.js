import get from 'lodash/get';
import * as constants from '../constants';

export const profilesSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'profiles'])

export const newDocumentSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'newDocument'])

export const analysisSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'analysis'])

export const documentSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'analysis', 'document'], [])

export const documentTonesSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'analysis', 'document', 'tones'], [])

export const documentAverageSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'analysis', 'document', 'average'], [])

export const sentencesSelector = (state) => {
  const sentences = get(state, [constants.ANALYSIS_REDUCER, 'analysis', 'sentences'], []);
  return JSON.stringify(sentences) === '{}' ? [] : sentences;
}
