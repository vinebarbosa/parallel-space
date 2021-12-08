import React, { useState, createRef } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as yup from 'yup'

import useAuth from '../../hooks/Authentication'

import titleImage from './../../assets/title.png'

import VerticalContainer from './../../components/VerticalContainer'
import Card from './../../components/Card'
import Input from './../../components/Input'
import Button from './../../components/Button'
import Toast from '../../components/Toast'

import styles from './styles'

function Login() {
  const navigation = useNavigation()
  const context = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputEmail = createRef()
  const inputPassword = createRef()

  const [messages, setMessages] = useState([])

  let isRequesting = false

  function showToast(text, type = 'error') {
    const message = {
      key: Math.trunc(Math.random() * 10000),
      text: text,
      color: ''
    }

    switch (type) {
      case 'error':
        message.color = '#ef5350'
        break
      case 'sucess':
        message.color = '#1b873f'
        break
      default:
        break
    }
    setMessages([...messages, message])
  }

  async function validarDados() {
    try {
      await yup
        .string()
        .required(() => {
          inputEmail.current.focusOnError()
          showToast('Este campo é obrigatório', 'error')
        })
        .email(() => {
          inputEmail.current.focusOnError()
          showToast('Formato de email inválido', 'error')
        })
        .validate(email)
    } catch {
      return false
    }
    // Validando Senha
    try {
      await yup
        .string()
        .required(() => {
          inputPassword.current.focusOnError()
          showToast('Este campo é obrigatório', 'error')
        })
        .validate(password)
    } catch {
      return false
    }

    return true
  }

  async function handlePressButton() {
    if (!isRequesting) {
      isRequesting = true

      const validated = await validarDados()

      if (validated) {
        const response = await context.Login(email, password)

        if (response === 'Usuário não cadastrado') {
          inputEmail.current.focusOnError()
          showToast('Usuário não cadastrado', 'error')
        } else if (response === 'Senha incorreta') {
          inputPassword.current.focusOnError()
          showToast('Senha incorreta', 'error')
        }

        isRequesting = false
      }
    }
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#121214" />

      <ScrollView keyboardShouldPersistTaps="handled">
        <VerticalContainer>
          <Image source={titleImage} style={styles.title} />

          <Card altura={440}>
            <Text style={styles.cardTitle}>Faça seu login</Text>

            <Input
              ref={inputEmail}
              name="mail"
              placeholder="Seu email"
              value={email}
              onChangeText={(text) => {
                setEmail(text)
                inputEmail.current.resetError()
              }}
              onBlur={() => {
                inputEmail.current.handleBlur()
                if (email !== '') inputEmail.current.fielled()
                else inputEmail.current.unfielled()
              }}
            />

            <Input
              ref={inputPassword}
              name="lock"
              placeholder="Sua senha"
              secureTextEntry
              value={password}
              onChangeText={(text) => {
                setPassword(text)
                inputPassword.current.resetError()
              }}
              onBlur={() => {
                inputPassword.current.handleBlur()
                if (password !== '') inputPassword.current.fielled()
                else inputPassword.current.unfielled()
              }}
            />

            <Button onPress={handlePressButton}>ENTRAR</Button>

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
      </ScrollView>

      {messages.map((message) => (
        <Toast
          key={message.key}
          message={message.text}
          color={message.color}
          onHide={() => {
            setMessages((messages) =>
              messages.filter((currentMessage) => currentMessage !== message)
            )
          }}
        />
      ))}
    </>
  )
}

export default Login
