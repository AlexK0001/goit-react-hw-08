// import React from "react";
// import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/components/App/App'
import './index.css'
import { Provider } from 'react-redux';
import { PersistGate} from 'redux-persist/integration/react';
// import store from '../src/redux/store';
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "../src/redux/store";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor = {persistor} loading = {null}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>,
)
