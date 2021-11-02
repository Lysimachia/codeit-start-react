function getRandomNumber(min: number, max: number) {
  const minToInt = Math.ceil(min);
  const maxToInt = Math.floor(max);
  return Math.floor(Math.random() * (maxToInt - minToInt + 1)) + minToInt;
}

export default getRandomNumber;
