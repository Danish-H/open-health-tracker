import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OidcProvider, OidcSecure } from '@axa-fr/react-oidc';
import { oidc_configuration } from './config.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <OidcProvider configuration={oidc_configuration} >
          <OidcSecure>
            <App />
          </OidcSecure>
        </OidcProvider>
  </React.StrictMode>
);

