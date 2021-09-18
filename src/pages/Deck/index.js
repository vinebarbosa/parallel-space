import React from 'react';

import './styles.css';
import fogueteImg from '../../assets/img/foguete.svg';
import tituloPequenoImg from '../../assets/img/titulo-pequeno.svg';
import Pads from '../../components/Pads';

function Deck() {
  return (
    <div className="deck-page-container">
      <div className="image-title-container">
        <img src={fogueteImg} alt="foguete" />
        <img src={tituloPequenoImg} alt="titulo" />
      </div>
      <div>
        <Pads />
      </div>
    </div>
  );
}

export default Deck;
