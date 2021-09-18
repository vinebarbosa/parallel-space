/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './styles.css';

function Pad(props) {
  if (props.data.type === 'obs') {
    console.log('OK!');
  }

  return <div className="pad" />;
}

export default Pad;
