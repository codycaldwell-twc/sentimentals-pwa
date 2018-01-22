import React from 'react';
import './styles.css';

const DashboardControls = ({ analyze }) => (
  <div className='dashboard-controls'>
    <input type='button' onClick={analyze} value='Analyze'/>
    <input type='button' onClick={analyze} value='Clear Analysis'/>
    <label>
      <input type='checkbox' id='sentence-level-checkbox' />
      Sentence-Level Analysis
    </label>
  </div>
);

export default DashboardControls;
