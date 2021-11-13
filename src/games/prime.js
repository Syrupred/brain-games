import getRandomNumber from '../getRandomNumber.js';

const isPrime = (randomNumber) => {
  for (let divisor = 2; divisor <= Math.sqrt(randomNumber); divisor += 1) {
    if (randomNumber % divisor === 0) {
      return false;
    }
  }
  return true;
};

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => [gameRound, rulesGame];
