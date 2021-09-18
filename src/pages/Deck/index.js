import React from 'react';

import './styles.css';
import { FiMaximize, FiMinimize } from 'react-icons/fi';
import fogueteImg from '../../assets/img/foguete.svg';
import tituloPequenoImg from '../../assets/img/titulo-pequeno.svg';
import Pads from '../../components/Pads';
import useFullscreenStatus from '../../utils/useFullscreenStatus';

function Deck() {
  const maximizableElement = React.useRef(null);

  const [isFullscreen, setIsFullscreen] =
    useFullscreenStatus(maximizableElement);

  const handleExitFullscreen = () => document.exitFullscreen();

  return (
    <div ref={maximizableElement} className="deck-page-container">
      <div className="image-title-container">
        <img src={fogueteImg} alt="foguete" />
        <img src={tituloPequenoImg} alt="titulo" />
      </div>

      <Pads />

      <div className="button-maximize-container">
        <FiMaximize
          size={32}
          color="#757575"
          className={`button-maximize ${isFullscreen ? 'fullscreen' : ''}`}
          onClick={setIsFullscreen}
        />
        <FiMinimize
          size={32}
          color="#757575"
          className={`button-minimize ${isFullscreen ? 'fullscreen' : ''}`}
          onClick={handleExitFullscreen}
        />
      </div>
    </div>
  );
}

export default Deck;
