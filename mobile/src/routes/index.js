import React from 'react'

import useAuth from '../hooks/Authentication'

import * as SplashScreen from 'expo-splash-screen'
import * as ScreenOrientation from 'expo-screen-orientation'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

function Routes() {
  SplashScreen.preventAutoHideAsync()

  const { signed, isLoading } = useAuth()

  if (!isLoading) {
    setTimeout(() => {
      SplashScreen.hideAsync().then(() => {
        if (signed) {
          ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE
          )
        } else {
          ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.PORTRAIT_UP
          )
        }
      })
    }, 2000)
  }

  return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
