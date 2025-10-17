import React from 'react'; // Make sure React is imported
import ReactDOM from 'react-dom/client'; // ReactDOM.createRoot for React 18+
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; // Proper import for BrowserRouter

// Create root element
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// Optional: Performance measurement
reportWebVitals();
