import getRandomNumber from '../getRandomNumber.js';

const getGreatestCommonDivisor = (numberFirst, numberSecond) => {
  let a = numberFirst;
  let b = numberSecond;
  if (a === b) {
    return a;
  }
  if (a < b) {
    [a, b] = [b, a];
  }
  return getGreatestCommonDivisor(a - b, b);
};

const rulesGame = 'Find the greatest common divisor of given numbers.';

const gameRound = () => {
  const numberFirst = getRandomNumber(1, 100);
  const numberSecond = getRandomNumber(1, 100);
  const question = `${numberFirst} ${numberSecond}`;
  const correctAnswer = getGreatestCommonDivisor(numberFirst, numberSecond);
  return [question, String(correctAnswer)];
};

export default () => [gameRound, rulesGame];
