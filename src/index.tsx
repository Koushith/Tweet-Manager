import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { AllBookMarkProvider } from './context/all-bookmark.context';
import { CategoryProvider } from './context/category-context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AllBookMarkProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </AllBookMarkProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
