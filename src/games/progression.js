import { getRandomNumber, getProgression } from '../functions.js';

export default () => {
  const firstNumberOfProgression = getRandomNumber(1, 10);
  const differenceOfProgression = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, 9);
  const progression = getProgression(firstNumberOfProgression, differenceOfProgression);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [question, String(correctAnswer)];
};
