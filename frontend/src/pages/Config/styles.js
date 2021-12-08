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
    display: flex;
    flex-direction: row;
    align-items: center;
    background: transparent;
    border: none;

    transition: filter 0.2s;
    p{
      color: white;
      padding-right: 5px;
      font-weight:bold;
    }
    &:hover {
      filter: brightness(0.8);
    }
  }
`
