const getRandomNumber = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const isPrime = (randomNumber) => {
  for (let divisor = 2; divisor < Math.sqrt(randomNumber); divisor += 1) {
    if (randomNumber % divisor === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const minRandomValue = 1;
  const maxRandomValue = 100;
  const randomNumber = getRandomNumber(minRandomValue, maxRandomValue);
  const question = `${randomNumber}`;
  const correctAnswer = isPrime(randomNumber);
  return [question, correctAnswer];
};

export default () => [prime, rulesGame];
