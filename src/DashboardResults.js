import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const DashboardResults = ({ analysis }) => (
  <textarea
    className="dashboard-result"
    rows="15"
    cols="50"
    placeholder="This is the result"
  />
);

DashboardResults.propTypes = {
  analysis: PropTypes.object
};

export default DashboardResults;
