import styled from 'styled-components'

export const Container = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div.select-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    & + div {
      margin-top: 15px;
    }


    label {
      margin-right: 15px;
      font-size: 14px;
      font-weight: 500;
    }

    select, input {
      display: block;
      width: 200px;
      height: 30px;
      border: none;
      color: #fff;
      background: #646464;
      font-size: 16px;
      font-weight: 500;
      border-radius: 5px;
      padding-left: 10px;
      padding-right: 10px;
    }

    input::placeholder {
      color: #ddd;
    }

    .shortcut-selector {
      height: 30px;
      justify-content: flex-start;
    }

  }
`

export const ImageSelect = styled.div`
  height: 100%;
  margin-right: 45px;
  display: flex;
  align-items: center; ;

  div {
    height: 90px;
    width: 90px;
    background: #292A2D;
    border-radius: 15px;
    border: 3px solid #757575;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content:flex-end;
  padding-top: 10px;

  div + div {
    margin-left: 10px;
  }
`
