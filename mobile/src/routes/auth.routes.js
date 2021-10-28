import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import iosPressets from '../configs/iosPresset'

import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createStackNavigator()

function AuthRoutes() {
  return (
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
  )
}

export default AuthRoutes
