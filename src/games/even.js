import { getRandomNumber } from '../functions.js';

export default () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};
