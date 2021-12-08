import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  position: relative;
  margin-bottom: 15px;
  outline: 0;

  input {
    display: flex;
    width: 100%;
    background-color: #121214;
    color: #FFF;
    font-size: 18px;
    padding: 0 50px;
    border-radius: 10px;
    height: 50px;
    border: none;
    outline: 0;

    &.error {
      border: 2px solid #ef5350;
      padding: 0 48px;
    }

    &.focused {
      border: 2px solid #8257E5;
      padding: 0 48px;
    }
  }

  div.icon {
    position: absolute;
    top: 13px;
    left: 12px;
  }

  div.security-entry-icon {
    position: absolute;
    top: 13px;
    right: 12px;
  }
`
