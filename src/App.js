import React, { Component } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Dashboard />
      </div>
    );
  }
}

export default App;
