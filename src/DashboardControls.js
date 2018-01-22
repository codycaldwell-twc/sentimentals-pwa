import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  submitAnalysis,
  clearAnalysis,
  toggleSentenceLevel
} from './actions';
import { enableSentenceLevelSelector } from './selectors';
import './styles.css';

const DashboardControls = ({
  enableSentenceLevel,
  submitAnalysis,
  clearAnalysis,
  toggleSentenceLevel
}) =>  (
  <div className='dashboard-controls'>
    <div className='btn btn-primary' onClick={submitAnalysis}>Analyze</div>
    <div className='btn btn-primary' onClick={clearAnalysis}>Clear Analysis</div>
    <label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" onChange={toggleSentenceLevel} checked={enableSentenceLevel}/>
            Sentence-Level Analysis
          </div>
        </div>
      </div>
    </label>
  </div>
);

const mapStateToProps = (state) => ({
  enableSentenceLevel: enableSentenceLevelSelector(state),
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    submitAnalysis,
    clearAnalysis,
    toggleSentenceLevel,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DashboardControls);
