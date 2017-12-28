import React, { Component } from 'react';
import DashboardInputList from './DashboardInputList';
import DashboardResults from './DashboardResults';
import './styles.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <DashboardInputList />
        <DashboardResults />
      </div>
    );
  }
}

export default Dashboard;
