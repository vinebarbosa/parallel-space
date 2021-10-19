// /* eslint-disable react/display-name */
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
        setError(true)
        inputRef.current.focus()
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
      borderColor: error ? '#d73628' : isFocused ? '#8257E5' : '#121214',
      borderWidth: error | isFocused ? 1 : 0
    },
    icon: error ? '#d73628' : isFocused | isFilled ? '#8257E5' : '#757575',
    securityIcon: error ? '#d73628' : isFocused ? '#8257E5' : '#757575'
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
