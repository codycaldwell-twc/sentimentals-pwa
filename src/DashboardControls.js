import React from 'react';
import './styles.css';

const DashboardControls = ({ analyze }) => (
  <div className='dashboard-controls'>
    <div className='btn btn-primary' onClick={analyze}>Analyze</div>
    <div className='btn btn-primary' onClick={analyze}>Clear Analysis</div>
    <label>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <input type="checkbox" />
            Sentence-Level Analysis
          </div>
        </div>
      </div>
    </label>
  </div>
);

export default DashboardControls;
