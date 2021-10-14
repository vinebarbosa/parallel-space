import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import titleImage from './../../assets/title.png'

import Card from './../../components/Card'
import Input from './../../components/Input'
import Button from './../../components/Button'

import styles from './styles'

function Register() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#121214" />

      <View style={styles.container}>
        <Image source={titleImage} style={styles.title} />

        <Card altura={490}>
          <Text style={styles.cardTitle}>Crie sua conta</Text>

          <Input name="mail" placeholder="Seu email" />
          <Input name="user" placeholder="Seu nome" />
          <Input name="lock" placeholder="Sua senha" secureTextEntry={true} />
          <Input
            name="lock"
            placeholder="Confirme sua senha"
            secureTextEntry={true}
          />

          <Button>CADASTRAR</Button>
        </Card>

        <TouchableOpacity style={styles.registerTextContainer}>
          <Feather name="arrow-left" size={24} color="#8257E5" />
          <Text style={styles.registerTextLink}>Voltar para o login</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Register
