import React from 'react';

import './global.css';

import { AuthProvider } from './contexts/Authcontext'
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
