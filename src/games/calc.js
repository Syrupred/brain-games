const getRandomNumber = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomOperator = (randomNumber) => {
  const firstValue = 1;
  const secondValue = 30;
  const thirdValue = 65;
  if (randomNumber >= firstValue && randomNumber < secondValue) {
    return '*';
  }
  if (randomNumber >= secondValue && randomNumber <= thirdValue) {
    return '+';
  }
  return '-';
};

const getResultOfCalc = (randomNumberFirst, randomNumberSecond, randomOperator) => {
  if (randomOperator === '*') {
    return randomNumberFirst * randomNumberSecond;
  }
  if (randomOperator === '+') {
    return randomNumberFirst + randomNumberSecond;
  }
  return randomNumberFirst - randomNumberSecond;
};

const rulesGame = 'What is the result of the expression?';

const calc = () => {
  const minRandomValue = 1;
  const maxRandomValue = 100;
  const randomNumberFirst = getRandomNumber(minRandomValue, maxRandomValue);
  const randomNumberSecond = getRandomNumber(minRandomValue, maxRandomValue);
  const randomOperator = getRandomOperator(randomNumberFirst);
  const question = `${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`;
  const correctResult = getResultOfCalc(randomNumberFirst, randomNumberSecond, randomOperator);
  return [question, String(correctResult)];
};

export default () => [calc, rulesGame];
