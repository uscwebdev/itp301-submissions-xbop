import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.js';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
