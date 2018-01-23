import * as constants from '../constants';

export const initialState = {
  profiles: [],
  newDocument: '',
  analysis: undefined,
  enableSentenceLevelAnaylsis: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case constants.ADD_PROFILE_DOCUMENT:
    console.log('ADD_PROFILE_DOCUMENT');
      return {
        ...state,
        profiles: [
          ...state.profiles,
          ''
        ]
      };
    case constants.UPDATE_NEW_DOCUMENT:
    console.log('UPDATE_NEW_DOCUMENT');
      return {
        ...state,
        newDocument: action.payload,
      };
    case constants.UPDATE_PROFILE_DOCUMENT:
    console.log('UPDATE_PROFILE_DOCUMENT');
      const newProfiles = [...state.profiles];
      const { value, index } = action.payload;
      newProfiles[index] = value;
      return {
        ...state,
        profiles: [...newProfiles]
      };
    case constants.CLEAR_ANALYSIS:
    console.log('CLEAR_ANALYSIS');
      return {
        ...initialState
      };
    case constants.TOGGLE_SENTENCE_LEVEL_ANALYSIS:
    console.log('TOGGLE_SENTENCE_LEVEL_ANALYSIS');
      return {
        ...state,
        enableSentenceLevelAnaylsis: !state.enableSentenceLevelAnaylsis
      };
    case constants.ANALYSIS_SUCCESS:
    console.log('ANALYSIS_SUCCESS');
      return {
        ...state,
        analysis: action.payload
      };
    case constants.ANALYSIS_FAILURE:
    console.log('ANALYSIS_FAILURE');
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}
