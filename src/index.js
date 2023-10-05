import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import { ROUTE_PREFIX } from './configs/routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={`${ROUTE_PREFIX}`}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
