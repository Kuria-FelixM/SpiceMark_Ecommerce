import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom'; // ✅ Import BrowserRouter
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* ✅ Wraps the entire app */}
      <App />
    
   
  </React.StrictMode>
);

reportWebVitals();
