import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga4';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

// Initialize Google Analytics
if (window.location.hostname !== 'localhost') {
  ReactGA.initialize('G-N6PBLYXMET');
  ReactGA.send('pageview');
  console.log('CONNECTED');
} else {
  console.log('ANALYTICS NOT REPORTED - USER ON LOCALHOST');
}

// Create React root
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional performance reporting
reportWebVitals();
