import getRandomNumber from '../getRandomNumber.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomNumber(0, 2)];
};

const getResultOfCalc = (numberFirst, numberSecond, operator) => {
  switch (operator) {
    case '*':
      return numberFirst * numberSecond;

    case '+':
      return numberFirst + numberSecond;

    case '-':
      return numberFirst - numberSecond;

    default:
      return null;
  }
};

const rulesGame = 'What is the result of the expression?';

const gameRound = () => {
  const numberFirst = getRandomNumber(1, 100);
  const numberSecond = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = `${numberFirst} ${operator} ${numberSecond}`;
  const correctAnswer = getResultOfCalc(numberFirst, numberSecond, operator);
  return [question, String(correctAnswer)];
};

export default () => [gameRound, rulesGame];
