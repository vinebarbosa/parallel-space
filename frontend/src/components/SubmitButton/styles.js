import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  width: 80%;
  height: 50px;
  background: #8257E5;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  border: none;

  p {
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const LoadingButton = styled.div`
  display: flex;
  width: 80%;
  height: 50px;
  background: #8257E5;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  border: none;

  div {
    width: 24px;
    height: 24px;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;

    @keyframes button-loading-spinner {
      from {
          transform: rotate(0turn);
      }
      to {
          transform: rotate(1turn);
      }
    }
  }

`
