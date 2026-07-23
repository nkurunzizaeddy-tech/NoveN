import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Gracefully prevent unhandled promise rejections from crashing runtime
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && (event.reason.code === 403 || event.reason.status === 403 || event.reason.httpStatus === 200)) {
      event.preventDefault();
      console.warn('Handled background promise rejection notice:', event.reason);
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

