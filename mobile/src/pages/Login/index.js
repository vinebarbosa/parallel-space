import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

import titleImage from './../../assets/title.png'

import Card from './../../components/Card'
import Input from './../../components/Input'
import Button from './../../components/Button'

import styles from './styles'

function Login() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#121214" />

      <View style={styles.container}>
        <Image source={titleImage} style={styles.title} />

        <Card altura={440}>
          <Text style={styles.cardTitle}>Faça seu login</Text>

          <Input name="mail" placeholder="Seu email" />
          <Input name="lock" placeholder="Sua senha" secureTextEntry={true} />

          <Button>ENTRAR</Button>

          <View style={styles.registerTextContainer}>
            <Text style={styles.registerText}>Não possui uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.registerTextLink}> Registre-se</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    </>
  )
}

export default Login
