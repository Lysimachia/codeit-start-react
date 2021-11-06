import React from 'react';
import Dice from './Dice';
import './Board.css';

function Board({
  name,
  color,
  log,
}: {
  name: string;
  color: string;
  log: Array<number>;
}) {
  const currentNum = log[log.length - 1] || 1;
  const totalScore = log.reduce((prev, curr) => prev + curr, 0);
  return (
    <div className='Board'>
      <div className='Dice'>
        <h1>{name}</h1>
        <Dice color={color} num={currentNum} />
      </div>
      <div className='score'>
        <h1>총점 </h1>
        <p>{totalScore}</p>
      </div>
      <div className='log'>
        <h1>기록 </h1>
        <textarea value={log.join(', ')} rows={5} />
      </div>
    </div>
  );
}

export default Board;
