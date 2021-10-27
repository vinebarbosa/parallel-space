import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ObsProvider } from '../contexts/ObsContext'

import Profile from '../pages/Profile'
import iosPressets from '../configs/iosPresset'

const Stack = createStackNavigator()

function AppRoutes() {
  return (
    <ObsProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerBackground: '#121214',
          cardStyle: { backgroundColor: '#121214' }
        }}
      >
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={iosPressets}
        />
      </Stack.Navigator>
    </ObsProvider>
  )
}

export default AppRoutes
