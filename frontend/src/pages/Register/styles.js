import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  position: relative;

  img.titulo {
    margin-top: 12vh;
    margin-bottom: 8vh;
  }

  h2.titulo {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img.register-foguete{
    position: absolute;
    bottom: 50px;
    right:50px;
    height:250px;
    transform: rotate(15deg);

  }
  div.back {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    align-items: center;

    div {
      padding-left: 5px;

      a {
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;
        color: #8257E5;
      }
    }
  }
`
