import React, {
  useState,
  createRef,
  forwardRef,
  useImperativeHandle
} from 'react'

import { Icon } from '../Icon'
import { Container } from './styles'

function _Input(props, ref) {
  const [isSecurity, setIsSecurity] = useState(!!props.security)

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

  const styles = {
    icon: error ? '#ef5350' : isFocused | isFilled ? '#8257E5' : '#757575',
    securityIcon: error ? '#ef5350' : isFocused ? '#8257E5' : '#757575'
  }

  return (
    <Container onFocus={() => {
      setIsFocused(true)
    }}
    >
      <input
        ref={inputRef}
        type={isSecurity?"password":"text"}
        className={error?"error":isFocused?"focused":undefined}
        {...props}
      />
      <div className="icon">
        <Icon name={props.name} size={22} color={styles.icon} />
      </div>
      {
        props.security && (
          <div
            className="security-entry-icon"
            onClick={() => {
              setIsSecurity(!isSecurity)
            }}
          >
            <Icon
              name={isSecurity?'eye':'eye-off'}
              size={22}
              color={styles.securityIcon}
            />
          </div>
        )
      }
    </Container>
  )
}

export const Input = forwardRef(_Input)
