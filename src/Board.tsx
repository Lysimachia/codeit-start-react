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
    <div className='board'>
      <div className='dice'>
        <h2>{name}</h2>
        <Dice color={color} num={currentNum} />
      </div>
      <div className='score'>
        <h2>총점</h2>
        <p>{totalScore}</p>
      </div>
      <div className='log'>
        <h2>기록</h2>
        <textarea value={log.join(', ')} rows={5} />
      </div>
    </div>
  );
}

export default Board;
