import React, { Component } from 'react';
import DashboardInput from './DashboardInput';
import DashboardResults from './DashboardResults';
import './styles.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <DashboardInput />
        <DashboardResults />
      </div>
    );
  }
}

export default Dashboard;
