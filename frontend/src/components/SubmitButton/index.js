import React from 'react'

import { Button, LoadingButton } from './styles'

export function SubmitButton({ children, disable=false }) {
  return (
    <>
      {
        disable ? (
          <LoadingButton> <div /></LoadingButton>
        ) : (
          <Button><p>{children}</p></Button>
        )
      }
    </>
  )
}
