import React from 'react'
import { View, TextInput } from 'react-native'

import { Feather } from '@expo/vector-icons'

import styles from './styles'

function Input({ name, placeholder, secureTextEntry = false }) {
  return (
    <View style={styles.inputContainer}>
      <Feather name={name} size={24} color="#757575" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#757575"
        autoCompleteType="off"
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default Input
