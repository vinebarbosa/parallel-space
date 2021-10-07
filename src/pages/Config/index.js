import React from 'react';

import './styles.css';
import tituloPequenoImg from '../../assets/img/titulo-pequeno.svg';
import cometaImg from '../../assets/img/cometa.svg';
import solImg from '../../assets/img/sol.svg';
import fogueteImg from '../../assets/img/foguete.svg';
import jupterImg from '../../assets/img/jupter.svg';
import Pads from '../../components/Pads';

function Config() {
  return (
    <>
      <div className="parte1-div">
        <img className="titulo-pequeno" src={tituloPequenoImg} alt="titulo" />

        <div className="centralizar-container centralizar-vertical ">
          <Pads />
        </div>

        <img className="cometa" src={cometaImg} alt="cometa" />
        <img className="sol" src={solImg} alt="sol" />
        <img className="foguete-img" src={fogueteImg} alt="foguete" />
        <img className="jupter-img" src={jupterImg} alt="jupter" />
      </div>

      <div className="parte2-div">
        <p>Clique em um pad para configurar sua função</p>
      </div>
    </>
  );
}

export default Config;
