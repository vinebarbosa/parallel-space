import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import iosPressets from '../configs/iosPresset'

import { AuthProvider } from '../contexts/Authcontext'

import Login from '../pages/Login'
import Register from '../pages/Register'

const Stack = createStackNavigator()

function AuthRoutes() {
  return (
    <AuthProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#121214' }
        }}
      >
        <Stack.Screen name="Login" component={Login} options={iosPressets} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={iosPressets}
        />
      </Stack.Navigator>
    </AuthProvider>
  )
}

export default AuthRoutes
