const getRandomNumber = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const rulesGame = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const even = () => {
  const minRandomValue = 1;
  const maxRandomValue = 100;
  const randomNumber = getRandomNumber(minRandomValue, maxRandomValue);
  const question = `${randomNumber}`;
  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => [even, rulesGame];
