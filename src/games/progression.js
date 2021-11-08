import getRandomNumber from '../getRandomNumber.js';

const getProgression = (start, step) => {
  let val = 0;
  const arrProgression = [];
  const progressionLength = getRandomNumber(6, 11);
  for (let i = 1; i < progressionLength; i += 1) {
    val = start + (i - 1) * step;
    arrProgression.push(val);
  }
  return arrProgression;
};

const rulesGame = 'What number is missing in the progression?';

const gameRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const progression = getProgression(start, step);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = `${progression.join(' ')}`;
  return [question, String(correctAnswer)];
};

export default () => [gameRound, rulesGame];
