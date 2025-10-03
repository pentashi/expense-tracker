// Import core libraries
import React from 'react';
import ReactDOM from 'react-dom'; // ✅ React 16

// Import main App component
import App from './App';

// Initialize internationalization (i18n) before rendering the app
import './app/locale/i18n';

// Get root DOM element
const rootElement = document.getElementById('root');

if (rootElement) {
  // Render the app inside React.StrictMode
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootElement
  );
} else {
  console.error(
    'Root element not found. Make sure there is a div with id="root" in your index.html'
  );
}

// Register the service worker from public/service-worker.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js') // Public folder SW
      .then(registration => {
        console.log('ServiceWorker registered: ', registration);
      })
      .catch(registrationError => {
        console.log('ServiceWorker registration failed: ', registrationError);
      });
  });
}
