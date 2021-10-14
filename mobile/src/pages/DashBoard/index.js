import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, View } from 'react-native'

import * as ScreenOrientation from 'expo-screen-orientation'

import HorizontalContainer from './../../components/HorizontalContainer'

import fogueteImage from './../../assets/foguete.png'
import titleSmallImage from './../../assets/titleSmall.png'
import PadsContainer from '../../components/PadsContainer'

import styles from './styles'

function DashBoard() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
  return (
    <>
      <StatusBar hidden={true} />
      <HorizontalContainer>
        <View style={styles.logoContainer}>
          <Image source={fogueteImage} />
          <Image source={titleSmallImage} />
        </View>
        <PadsContainer />
      </HorizontalContainer>
    </>
  )
}

export default DashBoard
