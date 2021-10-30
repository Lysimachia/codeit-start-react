import Button  from './Button';
import Dice from './Dice';

function Board({name, color, log}) {
	const currentNum = log[log.length - 1] || 1;
	const totalScore = log.reduce((prev, curr) => prev + curr, 0);
		return (
				<div className="Board">
						<div className="Dice">
								<h1>{name}</h1>
								<Dice color={color} num={currentNum}></Dice>
						</div>
						<div className="score">
								<h1>총점</h1>
								<p>{totalScore}</p>
						</div>
						<div className="log">
								<h1>기록</h1>
								<p>{log.join(', ')}</p>
						</div>
				</div>
		)
}

export default Board;