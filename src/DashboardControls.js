import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import {
  submitAnalysis,
  clearAnalysis,
  toggleSentenceLevel
} from './actions';
import './styles.css';

const DashboardControls = ({
  enableSentenceLevel,
  submitAnalysis,
  clearAnalysis,
  toggleSentenceLevel
}) =>  (
  <div className='dashboard-controls'>
    <Button type='primary' onClick={submitAnalysis}>
      <Link to='/results'>
        Analyze
      </Link>
    </Button>
    <Button type='primary' onClick={clearAnalysis}>Clear Analysis</Button>
  </div>
);

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    submitAnalysis,
    clearAnalysis,
    toggleSentenceLevel,
  }, dispatch);

export default connect(null, mapDispatchToProps)(DashboardControls);
