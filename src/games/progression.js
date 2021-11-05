const getRandomNumber = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getProgression = (firstNumberOfProgression, differenceOfProgression) => {
  let numberOfProgression = 0;
  const resultProgression = [];
  for (let indexNumber = 1; indexNumber < 11; indexNumber += 1) {
    numberOfProgression = firstNumberOfProgression + (indexNumber - 1) * differenceOfProgression;
    resultProgression.push(numberOfProgression);
  }
  return resultProgression;
};

const rulesGame = 'What number is missing in the progression?';

const progression = () => {
  const minRandomValue = 1;
  const maxRandomValue = 10;
  const minHiddenIndex = 0;
  const maxHiddenIndex = 9;
  const firstNumberOfProgression = getRandomNumber(minRandomValue, maxRandomValue);
  const differenceOfProgression = getRandomNumber(minRandomValue, maxRandomValue);
  const hiddenIndex = getRandomNumber(minHiddenIndex, maxHiddenIndex);
  const progressWithoutHidden = getProgression(firstNumberOfProgression, differenceOfProgression);
  const correctAnswer = progressWithoutHidden[hiddenIndex];
  progressWithoutHidden[hiddenIndex] = '..';
  const question = `${progressWithoutHidden.join(' ')}`;
  return [question, String(correctAnswer)];
};

export default () => [progression, rulesGame];
