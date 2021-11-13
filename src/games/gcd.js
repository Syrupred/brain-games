import getRandomNumber from '../getRandomNumber.js';

const getDivisor = (a, b) => (b === 0 ? a : getDivisor(b, a % b));

const rulesGame = 'Find the greatest common divisor of given numbers.';

const gameRound = () => {
  const numberFirst = getRandomNumber(1, 100);
  const numberSecond = getRandomNumber(1, 100);
  const question = `${numberFirst} ${numberSecond}`;
  const correctAnswer = getDivisor(numberFirst, numberSecond);
  return [question, String(correctAnswer)];
};

export default () => [gameRound, rulesGame];
