import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OidcProvider, OidcSecure } from '@axa-fr/react-oidc';

const oidc_configuration = {
  client_id: 'frontend',
  redirect_uri: window.location.origin + '/authentication/callback',
  scope: 'profile email offline_access',
  authority: 'https://sso.hbigroup.org/realms/openhealthtracker',
  service_worker_relative_url:'/OidcServiceWorker.js',
  service_worker_only:true,
};

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

