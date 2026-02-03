import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';              // ✅ add
import './index.js';
import App from './App';
import { AuthContexProvider } from './context/authContext.js';

// ✅ THIS LINE FIXES EVERYTHING
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);
