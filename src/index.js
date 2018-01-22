import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
