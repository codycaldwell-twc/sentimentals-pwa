import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Checkbox } from 'antd';
import {
  submitAnalysis,
  clearAnalysis,
  setToneCategories,
} from './actions';
import * as constants from './constants';
import './styles.css';

const DashboardControls = ({
  submitAnalysis,
  clearAnalysis,
  toneCategories,
  setToneCategories,
  analyzeDisabled,
}) =>  (
  <div className='dashboard-controls'>
    <Button type='primary' onClick={submitAnalysis} disabled={analyzeDisabled}>
      <Link to='/results'>
        Analyze
      </Link>
    </Button>
    <Button type='primary' onClick={clearAnalysis}>Clear Analysis</Button>
    <Checkbox.Group options={constants.DEFAULT_TONE_CATEGORIES} value={toneCategories} onChange={setToneCategories} />
  </div>
);

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    submitAnalysis,
    clearAnalysis,
    setToneCategories,
  }, dispatch);

export default connect(null, mapDispatchToProps)(DashboardControls);
