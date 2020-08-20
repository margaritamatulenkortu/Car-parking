import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './components/Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
