import React from 'react';
import PropTypes from 'prop-types';
import AnalysisGraph from './AnalysisGraph';
import './styles.css';

export const DashboardResults = ({ analysis }) => {
  console.log('results analysis', analysis);
  return (
    <div className='dashboard_results'>
      <div id='analysis-graph-container'>
        <AnalysisGraph
          height={400}
          width={600}
          analysis={analysis}
        />
      </div>
    </div>
  );
}

DashboardResults.propTypes = {
  analysis: PropTypes.object
};

export default DashboardResults;
