import React from 'react';
import Pad from '../Pad';

import './styles.css';

const data = {
  type: 'obs',
  category: 'scene',
  sceneName: 'Gameplay 1',
};

function Pads() {
  return (
    <div className="pads-container">
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
      <Pad data={data} />
    </div>
  );
}

export default Pads;
