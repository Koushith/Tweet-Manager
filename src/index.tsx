import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { AllBookMarkProvider } from './context/all-bookmark.context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllBookMarkProvider>
        <App />
      </AllBookMarkProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
