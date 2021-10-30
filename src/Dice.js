
function Dice({color, num}) {
    return <img src={require(`./assets/dice-${color}-${num}.svg`).default} alt={`dice-${color}-${num}`} />;
}

export default Dice;