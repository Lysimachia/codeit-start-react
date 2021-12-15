import React, { useState, useCallback } from 'react';
import Board from './Board';
import Button from './Button';
import ToggleSwitch from './ToggleSwitch';
import getRandomNumber from './Util';
import Logo from './assets/logo.png';
import './App.css';

export const addItem = (newItem) => (old) => [...old, newItem];


function App() {
  const [myLog, setMyLog] = useState<DiceNum[]>([]);
  const [otherLog, setOtherLog] = useState<DiceNum[]>([]);
  const [isDarkMode, setDarkMode] = useState(false);
  const [isFirst, setIsFirstRendering] = useState(true)

  const handleMode = useCallback(() => {
     setDarkMode(!isDarkMode);
     setIsFirstRendering(false);
  }, [isDarkMode])

  const handlePlay = useCallback(() => {
    const myNum    = getRandomNumber(1, 6);
    const otherNum = getRandomNumber(1, 6);
    setMyLog(addItem(myNum));
    setOtherLog(addItem(otherNum));
  }, [myNum, otherNum]);

  const handleReset = useCallback(() => {
    setMyLog([]);
    setOtherLog([]);
  },[]);

  const getClassName = (isDarkMode ? 'dark' : 'light') + ' ' + (isFirst ? 'first' : '')
  
  return (
    <main className={className}>
      <div className='darkModeArea'>
        <span className='icon'> light </span>
        <ToggleSwitch
          onClick={() => handleMode()}
          onTouchStart={() => handleMode()}
        />
        <span className='icon'> dark </span>
      </div>
      <header>
        <img src={Logo} alt='logo' width='200' />
        <h1>주사위 게임</h1>
      </header>
      <section className='ButtonAreaOuter'>
        <div className='ButtonAreaInner'>
          <Button className='blue' onClick={handlePlay}>
            던지기
          </Button>
          <Button className='red' onClick={handleReset}>
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
