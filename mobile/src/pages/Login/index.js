import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import titleImage from './../../assets/title.png'

import VerticalContainer from './../../components/VerticalContainer'
import Card from './../../components/Card'
import Input from './../../components/Input'
import Button from './../../components/Button'

import styles from './styles'

function Login() {
  const navigation = useNavigation()

  return (
    <>
      <StatusBar style="light" backgroundColor="#121214" />

      <VerticalContainer>
        <Image source={titleImage} style={styles.title} />

        <Card altura="50%">
          <Text style={styles.cardTitle}>Faça seu login</Text>

          <Input name="mail" placeholder="Seu email" />
          <Input name="lock" placeholder="Sua senha" secureTextEntry={true} />

          <Button>ENTRAR</Button>

          <View style={styles.registerTextContainer}>
            <Text style={styles.registerText}>Não possui uma conta?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register')
              }}
            >
              <Text style={styles.registerTextLink}> Registre-se</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </VerticalContainer>
    </>
  )
}

export default Login
