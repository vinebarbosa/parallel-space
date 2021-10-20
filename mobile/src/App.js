import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AuthProvider } from './contexts/Authcontext'

import Routes from './routes'

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: { background: '#121214' }
      }}
    >
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}
