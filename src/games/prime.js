import getRandomNumber from '../getRandomNumber.js';

const isPrime = (randomNumber) => {
  for (let divisor = 2; divisor <= Math.sqrt(randomNumber); divisor += 1) {
    if (randomNumber % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const gameRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber);
  return [question, correctAnswer];
};

export default () => [gameRound, rulesGame];
