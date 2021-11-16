import React from 'react'

import { Container } from './styles'

export function Card({ children, altura }) {
  return (
    <Container altura={altura}>{children}</Container>
  )
}
