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
