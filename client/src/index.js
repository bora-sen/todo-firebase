import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRouter from './MainRouter';
import AuthProvider from './contexts/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
