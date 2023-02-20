export const oidc_configuration = {
    client_id: 'frontend',
    redirect_uri: window.location.origin + '/authentication/callback',
    scope: 'openid profile email offline_access',
    authority: 'https://sso.hbigroup.org/realms/openhealthtracker',
    service_worker_relative_url:'/OidcServiceWorker.js',
    service_worker_only:true,
  };