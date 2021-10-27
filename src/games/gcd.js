import { getRandomNumber, getGreatestCommonDivisor } from '../functions.js';

export default () => {
  const randomNumberFirst = getRandomNumber(1, 100);
  const randomNumberSecond = getRandomNumber(1, 100);
  const question = `${randomNumberFirst} ${randomNumberSecond}`;
  const correctAnswer = getGreatestCommonDivisor(randomNumberFirst, randomNumberSecond);
  return [question, String(correctAnswer)];
};
