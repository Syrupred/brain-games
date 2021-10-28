import { getRandomNumber, isPrime } from '../functions.js';

export default () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber);
  return [question, correctAnswer];
};
