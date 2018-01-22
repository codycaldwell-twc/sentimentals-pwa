import * as constants from '../constants';

export const addProfileDocument = (payload) => ({
  type: constants.ADD_PROFILE_DOCUMENT,
  payload
});

export const updateNewDocument = (payload) => ({
  type: constants.UPDATE_NEW_DOCUMENT,
  payload
});

export const submitAnalysis = (payload) => ({
  type: constants.SUBMIT_ANALYSIS,
  payload
});

export const clearAnalysis = (payload) => ({
  type: constants.CLEAR_ANALYSIS,
  payload
});

export const toggleSentenceLevel = (payload) => ({
  type: constants.TOGGLE_SENTENCE_LEVEL_ANALYSIS,
  payload
});
