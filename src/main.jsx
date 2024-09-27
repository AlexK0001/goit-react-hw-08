import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../src/components/App/App'
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
