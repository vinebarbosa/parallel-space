import React, { useState, createRef } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StatusBar } from 'expo-status-bar'
import { Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import * as yup from 'yup'
import useAuth from '../../hooks/Authentication'

import titleImage from './../../assets/title.png'

import VerticalContainer from '../../components/VerticalContainer'
import Card from './../../components/Card'
import Input from './../../components/Input'
import Button from './../../components/Button'
import Toast from '../../components/Toast'

import styles from './styles'

function Register() {
  const navigation = useNavigation()
  const context = useAuth()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const inputEmail = createRef()
  const inputName = createRef()
  const inputPassword = createRef()
  const inputPassword2 = createRef()

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
    // '#ef5350''#00701a'
  }

  async function validarDados() {
    // Validando email
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

    // Validando Nome
    try {
      await yup
        .string()
        .required(() => {
          inputName.current.focusOnError()
          showToast('Este campo é obrigatório', 'error')
        })
        .validate(name)
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
      if (password2 !== password) {
        inputPassword2.current.focusOnError()
        showToast('As senhas não coincidem', 'error')
        return false
      }
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
        const response = await context.Registro(email, password, name)

        if (response === 'OK') {
          showToast(
            'Cadastrado efetuado com sucesso! Agora você já pode fazer login',
            'sucess'
          )

          setTimeout(() => {
            navigation.goBack()
          }, 3000)
        }

        if (response === 'Usuário já cadastrado') {
          inputEmail.current.focusOnError()
          showToast('Usuário já cadastrado', 'error')
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

          <Card altura={500}>
            <Text style={styles.cardTitle}>Crie sua conta</Text>

            <Input
              name="mail"
              placeholder="Seu email"
              ref={inputEmail}
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
              name="user"
              placeholder="Seu nome"
              ref={inputName}
              value={name}
              onChangeText={(text) => {
                setName(text)
                inputName.current.resetError()
              }}
              onBlur={() => {
                inputName.current.handleBlur()
                if (name !== '') inputName.current.fielled()
                else inputName.current.unfielled()
              }}
            />

            <Input
              name="lock"
              placeholder="Sua senha"
              secureTextEntry
              ref={inputPassword}
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

            <Input
              name="lock"
              placeholder="Confirme sua senha"
              secureTextEntry
              ref={inputPassword2}
              value={password2}
              onChangeText={(text) => {
                setPassword2(text)
                inputPassword2.current.resetError()
              }}
              onBlur={() => {
                inputPassword2.current.handleBlur()
                if (password2 !== '') inputPassword2.current.fielled()
                else inputPassword2.current.unfielled()
              }}
            />

            <Button onPress={handlePressButton}>CADASTRAR</Button>
          </Card>

          <TouchableOpacity
            style={styles.registerTextContainer}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Feather name="arrow-left" size={24} color="#8257E5" />
            <Text style={styles.registerTextLink}>Voltar para o login</Text>
          </TouchableOpacity>
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

export default Register
