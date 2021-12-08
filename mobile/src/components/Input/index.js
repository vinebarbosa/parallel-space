import React, {
  useState,
  createRef,
  forwardRef,
  useImperativeHandle
} from 'react'

import { View, TextInput, TouchableOpacity } from 'react-native'

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import styles from './styles'

function _Input(props, ref) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(
    props.secureTextEntry
  )

  const [error, setError] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const inputRef = createRef()

  useImperativeHandle(ref, () => {
    return {
      focusOnError() {
        inputRef.current.focus()
        setError(true)
      },
      resetError() {
        setError(false)
      },
      handleBlur() {
        setIsFocused(false)
      },
      fielled() {
        setIsFilled(true)
      },
      unfielled() {
        setIsFilled(false)
      }
    }
  })

  const _styles = {
    input: {
      borderColor: error ? '#ef5350' : isFocused ? '#8257E5' : '#121214',
      borderWidth: error | isFocused ? 2 : 0
    },
    icon: error ? '#ef5350' : isFocused | isFilled ? '#8257E5' : '#757575',
    securityIcon: error ? '#ef5350' : isFocused ? '#8257E5' : '#757575'
  }

  return (
    <View
      style={styles.container}
      onFocus={() => {
        setIsFocused(true)
      }}
    >
      <TextInput
        ref={inputRef}
        style={[styles.input, _styles.input]}
        placeholderTextColor="#757575"
        autoCompleteType="off"
        autoCapitalize="none"
        autoCorrect={false}
        {...props}
        secureTextEntry={isSecureTextEntry}
      />
      <Feather
        name={props.name}
        size={22}
        color={_styles.icon}
        style={styles.icon}
      />
      {props.secureTextEntry && (
        <TouchableOpacity
          onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}
          style={styles.securityIcon}
        >
          <MaterialCommunityIcons
            name={isSecureTextEntry ? 'eye' : 'eye-off'}
            size={22}
            color={_styles.securityIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  )
}

const Input = forwardRef(_Input)

export default Input
