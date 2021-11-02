import React, { useState } from 'react';

import Board from './Board';
import Button from './Button';
import getRandomNumber from './Util';

function App() {
  const [myLog, setMyLog] = useState<number[]>([]);
  const [otherLog, setOtherLog] = useState<number[]>([]);

  const handlePlay = () => {
    const myNum = getRandomNumber(1, 6);
    const otherNum = getRandomNumber(1, 6);
    setMyLog([...myLog, myNum]);
    setOtherLog([...otherLog, otherNum]);
  };

  const handleReset = () => {
    setMyLog([]);
    setOtherLog([]);
  };
  return (
    <main>
      <section className='ButtonAreaOuter'>
        <div className='ButtonAreaInner'>
          <Button color='blue' onClick={handlePlay}>
            던지기
          </Button>
          <Button color='red' onClick={handleReset}>
            새로하기
          </Button>
        </div>
      </section>
      <section className='BoardArea'>
        <Board color='blue' name='나' log={myLog} />
        <Board color='red' name='상대방' log={otherLog} />
      </section>
    </main>
  );
}

export default App;
