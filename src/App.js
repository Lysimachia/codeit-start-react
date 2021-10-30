import Board from './Board';
import Button from './Button';
import getRandomNumber from './Util';
import { useState } from 'react'

function App() {
  const [myLog, setMyLog] = useState([]);
  const [otherLog, setOtherLog] = useState([]);

  const handlePlay = () => {
    const myNum = getRandomNumber(1, 6);
    const otherNum = getRandomNumber(1, 6); 
    setMyLog([...myLog, myNum]);
    setOtherLog([...otherLog, otherNum]);
  }

  const handleReset = () => {
    setMyLog([]);
    setOtherLog([]);
  }
    return (
        <main>
        {/* 버튼을 누르면, 각각의 Board에서 같은 이벤트가 발생해야 한다. */}
          <section className="ButtonArea">
              <Button onClick={handlePlay}>던지기</Button>
              <Button onClick={handleReset}>새로하기</Button>
          </section>
          <section className="BoardArea">
            <Board color="blue" name="나" log={myLog}></Board>
            <Board color="red" name="상대방" log={otherLog}></Board>
          </section>
        </main>
    )
}

export default App;