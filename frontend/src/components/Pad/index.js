import React from 'react';
import './styles.css';

function Pad({ changeSelectedPad, data, selectedPad }) {
  return (
    <div onClick={() => {
      changeSelectedPad(data)}} className={`pad ${selectedPad?.id === data.id ? 'selected' : ''}`
    }></div>
  );
}

export default Pad;
