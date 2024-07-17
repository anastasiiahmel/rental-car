import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
import { store } from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/rental-car">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
