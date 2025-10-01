// Import core libraries
import React from 'react';
import ReactDOM from 'react-dom'; // ✅ React 16 uses this

// Import main App component
import App from './App';

// Initialize internationalization (i18n) before rendering the app
import './app/locale/i18n';

// Register service worker for offline support and faster load times
import * as serviceWorker from './serviceWorker';

// Get root DOM element
const rootElement = document.getElementById('root');

if (rootElement) {
  // Render the app inside React.StrictMode (helps highlight potential issues)
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

// Register service worker (uncomment below if you want offline support)
// Learn more: https://bit.ly/CRA-PWA
serviceWorker.register();
