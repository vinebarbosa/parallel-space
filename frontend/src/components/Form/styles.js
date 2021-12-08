import styled from 'styled-components'

export const FormComponent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

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
  align-items: center;
  flex-direction: column;

  div.select-image-component-title {
    margin-bottom: 10px;
    p {
      font-size: 24px ;
    }
  }

  div.select-image-component-input {
    height: 90px;
    width: 90px;
    background: #292A2D;
    border-radius: 15px;

    .image-selector {
      border-radius: 15px;
      width: 90px;
      height: 90px;
    }
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
