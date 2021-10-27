export const getRandomNumber = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomOperator = (randomNumber) => {
  if (randomNumber >= 1 && randomNumber < 30) {
    return '*';
  }
  if (randomNumber >= 30 && randomNumber <= 65) {
    return '+';
  }
  return '-';
};

export const getResultOfCalc = (randomNumberFirst, randomNumberSecond, randomOperator) => {
  if (randomOperator === '*') {
    return randomNumberFirst * randomNumberSecond;
  }
  if (randomOperator === '+') {
    return randomNumberFirst + randomNumberSecond;
  }
  return randomNumberFirst - randomNumberSecond;
};
