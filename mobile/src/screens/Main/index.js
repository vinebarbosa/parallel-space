import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Image, View, Text, TouchableOpacity, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'

import useAuth from '../../hooks/Authentication'

import api from '../../services/api'

import HorizontalContainer from '../../components/HorizontalContainer'
import fogueteImage from './../../assets/foguete.png'
import titleSmallImage from './../../assets/titleSmall.png'
import PadsContainer from '../../components/PadsContainer'

import styles from './styles'
import { Pad } from '../../components/Pad'

function Profile() {
  const { Logout } = useAuth()

  const [data, setData] = useState([])

  useEffect(() => {
    async function getButtonsData() {
      const response = await api.get('buttons')

      response.data.sort((a, b) => {
        return a.position - b.position
      })

      setData(response.data)
    }
    getButtonsData()
  }, [])

  async function logout() {
    Logout()
  }

  return (
    <>
      <StatusBar hidden={true} />
      <HorizontalContainer>
        <View style={styles.logoContainer}>
          <Image source={fogueteImage} />
          <Image source={titleSmallImage} />
          <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Feather name="log-out" size={20} color="#CCC" />
            <Text style={styles.logoutButtonText}>Sair</Text>
          </TouchableOpacity>
        </View>
        <PadsContainer>
          {data[0] ? (
            <FlatList
              contentContainerStyle={styles.pads}
              data={data}
              numColumns={5}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Pad button={item} />}
            />
          ) : (
            <View />
          )}
        </PadsContainer>
      </HorizontalContainer>
    </>
  )
}

export default Profile
