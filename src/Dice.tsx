/* eslint-disable global-require */
import React from 'react';

function Dice({ color, num }: { color: string; num: number }) {
  return (
    <img
      // eslint-disable-next-line import/no-dynamic-require
      src={require(`./assets/dice-${color}-${num}.svg`).default}
      alt={`dice-${color}-${num}`}
      width='100px'
    />
  );
}

export default Dice;
