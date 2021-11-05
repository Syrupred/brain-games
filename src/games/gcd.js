const getRandomNumber = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getGreatestCommonDivisor = (randomNumberFirst, randomNumberSecond) => {
  let a = randomNumberFirst;
  let b = randomNumberSecond;
  if (a === b) {
    return a;
  }
  if (a < b) {
    const firstNumber = b;
    b = a;
    a = firstNumber;
  }
  return getGreatestCommonDivisor(a - b, b);
};

const rulesGame = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const minRandomValue = 1;
  const maxRandomValue = 100;
  const randomNumberFirst = getRandomNumber(minRandomValue, maxRandomValue);
  const randomNumberSecond = getRandomNumber(minRandomValue, maxRandomValue);
  const question = `${randomNumberFirst} ${randomNumberSecond}`;
  const correctAnswer = getGreatestCommonDivisor(randomNumberFirst, randomNumberSecond);
  return [question, String(correctAnswer)];
};

export default () => [gcd, rulesGame];
