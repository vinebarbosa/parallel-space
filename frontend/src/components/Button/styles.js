import styled from 'styled-components'

export const Container = styled.div`
  button {
    background: ${props => props.background === 'primary' ? '#8257E5' : '#FFF'};
    border: 0;
    color: ${props => props.background === 'primary' ? '#fff' : '#292A2D'};
    width: 95px;
    height: 38px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: bold;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

`
