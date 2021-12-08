import React from 'react'
import { Container } from './styles'

export function Button(props) {
  return (
    <Container background={props.background}>
      <button
        onClick={props.onClick}
        type={props.type}
      >{props.children}
      </button>
    </Container>
  )
}
