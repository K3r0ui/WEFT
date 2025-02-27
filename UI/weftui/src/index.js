// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "react-oidc-context";
import { UserProvider } from './UserContext'; // Import UserProvider

const root = ReactDOM.createRoot(document.getElementById('root'));

const oidcConfig = {
  authority: "http://localhost:8080/realms/weft",
  client_id: "weft-api",
  redirect_uri: "http://localhost:3000",
  onSigninCallback: () => {
    window.history.replaceState(
      {},
      document.title,
      window.location.pathname
    );
  },
  automaticSilentRenew: true,
  silentRequestTimeout: 5000,
};

root.render(
  <AuthProvider {...oidcConfig}>
    <UserProvider> {/* Wrap the app with UserProvider */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserProvider>
  </AuthProvider>
);

reportWebVitals();
