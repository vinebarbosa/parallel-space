import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import iosPressets from '../configs/iosPresset'

import Profile from '../pages/Profile'

const Stack = createStackNavigator()

function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackground: '#121214',
        cardStyle: { backgroundColor: '#121214' }
      }}
    >
      <Stack.Screen name="Profile" component={Profile} options={iosPressets} />
    </Stack.Navigator>
  )
}

export default AppRoutes
