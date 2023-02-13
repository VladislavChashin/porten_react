import React from 'react';
import ReactDOM from 'react-dom/client';
import {scroll} from './script/app';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
scroll()

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

