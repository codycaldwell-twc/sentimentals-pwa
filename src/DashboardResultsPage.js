import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import DashboardResults from './DashboardResults';
import { analysisSelector, sentencesSelector } from './selectors';
import './styles.css';

const DashboardResultsPage = ({ analysis, sentences }) => (
  <div className="App">
     <Header />
     <DashboardResults analysis={analysis} sentences={sentences} />
  </div>
)

const mapStateToProps = (state) => ({
  analysis: analysisSelector(state),
  sentences: sentencesSelector(state),
});

export default connect(mapStateToProps)(DashboardResultsPage);
