import getRandomNumber from '../getRandomNumber.js';

const rulesGame = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const gameRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => [gameRound, rulesGame];
