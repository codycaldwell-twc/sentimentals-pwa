import get from 'lodash/get';
import * as constants from '../constants';

export const profilesSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'profiles'])

export const newDocumentSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'newDocument'])

export const analysisSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'analysis'])

export const enableSentenceLevelSelector = (state) =>
  get(state, [constants.ANALYSIS_REDUCER, 'enableSentenceLevelAnaylsis'])
