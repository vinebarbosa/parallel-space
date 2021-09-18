import React from 'react';
import Pad from '../Pad';

import './styles.css';

const response = {
  tipo: 'obs',
  category: 'scene',
  sceneName: 'Gameplay 1',
};

function Pads() {
  return (
    <div className="pads-container">
      <Pad response={response} />
    </div>
  );
}

export default Pads;
