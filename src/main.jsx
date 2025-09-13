import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Debug logging
console.log('main.jsx loading...');

const root = document.getElementById('root');
if (!root) {
  console.error('Root element not found!');
} else {
  console.log('Root element found, rendering React app...');
  
  try {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('React app rendered successfully');
  } catch (error) {
    console.error('Error rendering React app:', error);
  }
}