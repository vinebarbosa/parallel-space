import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import useAuth from '../../hooks/Authentication'

import HorizontalContainer from '../../components/HorizontalContainer'
import fogueteImage from './../../assets/foguete.png'
import titleSmallImage from './../../assets/titleSmall.png'
import PadsContainer from '../../components/PadsContainer'

import styles from './styles'

function Profile() {
  const { Logout } = useAuth()
  return (
    <>
      <StatusBar hidden={true} />
      <HorizontalContainer>
        <View style={styles.logoContainer}>
          <Image source={fogueteImage} />
          <Image source={titleSmallImage} />
          <TouchableOpacity onPress={Logout} style={styles.logoutButton}>
            <Feather name="log-out" size={20} color="#CCC" />
            <Text style={{ color: '#CCC', paddingLeft: 5 }}>Sair</Text>
          </TouchableOpacity>
        </View>
        <PadsContainer />
      </HorizontalContainer>
    </>
  )
}

export default Profile
