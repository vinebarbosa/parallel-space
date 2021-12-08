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

  const [data, setData] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
  ])

  useEffect(() => {
    async function getButtonsData() {
      const response = await api.get('buttons')

      response.data.sort((a, b) => {
        return a.position - b.position
      })

      setData(response.data)
    }
    try {
      getButtonsData()
    } catch {}
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
          <FlatList
            contentContainerStyle={styles.pads}
            data={data}
            numColumns={5}
            keyExtractor={(item) => (item?.id ? item.id : item)}
            renderItem={({ item }) => <Pad button={item} />}
          />
        </PadsContainer>
      </HorizontalContainer>
    </>
  )
}

export default Profile
