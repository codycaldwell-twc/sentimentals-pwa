import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import DashboardPage from './DashboardPage';
import DashboardResultsPage from './DashboardResultsPage';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div id='root'>
        <Route exact path='/' component={DashboardPage} />
        <Route path='/results' component={DashboardResultsPage} />
      </div>
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
