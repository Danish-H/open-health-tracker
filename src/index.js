import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from 'oidc-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <AuthProvider
        authority="https://sso.hbigroup.org/realms/openhealthtracker"
        clientId="frontend"
        redirectUri="http://localhost:3000/login-uri"
        >
          <App />
        </AuthProvider>
  </React.StrictMode>
);

