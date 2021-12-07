import styled from 'styled-components'

export const PadsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80%;
  justify-content: center;
`

export const Pads = styled.div`
  display: grid;
  grid-template-columns: 90px 90px 90px 90px 90px;
  grid-column-gap: 16px;
  grid-row-gap: 18px;
  align-content: center;
  justify-content: center;
`

export const LogoutButtonContainer = styled.div`
  button {
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`
