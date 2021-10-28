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

export const getGreatestCommonDivisor = (randomNumberFirst, randomNumberSecond) => {
  let a = randomNumberFirst;
  let b = randomNumberSecond;
  if (a === b) {
    return a;
  }
  if (a < b) {
    const firstNumber = b;
    b = a;
    a = firstNumber;
  }
  return getGreatestCommonDivisor(a - b, b);
};

export const getProgression = (firstNumberOfProgression, differenceOfProgression) => {
  let numberOfProgression = 0;
  const resultProgression = [];
  for (let indexNumber = 1; indexNumber < 11; indexNumber += 1) {
    numberOfProgression = firstNumberOfProgression + (indexNumber - 1) * differenceOfProgression;
    resultProgression.push(numberOfProgression);
  }
  return resultProgression;
};
