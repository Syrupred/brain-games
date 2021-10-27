import { getRandomNumber, getRandomOperator, getResultOfCalc } from '../functions.js';

export default () => {
  const randomNumberFirst = getRandomNumber(1, 100);
  const randomNumberSecond = getRandomNumber(1, 100);
  const randomOperator = getRandomOperator(randomNumberFirst);
  const question = `${randomNumberFirst} ${randomOperator} ${randomNumberSecond}`;
  const correctResult = getResultOfCalc(randomNumberFirst, randomNumberSecond, randomOperator);
  return [question, String(correctResult)];
};
