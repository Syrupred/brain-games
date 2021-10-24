import readlineSync from 'readline-sync';

const getRandoWmIntInclusive = (start, end) => {
  const min = Math.ceil(start);
  const max = Math.floor(end);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default () => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
  for (let numberOfCorrectAnswers = 0; numberOfCorrectAnswers < 3; numberOfCorrectAnswers += 1) {
    const randomNumber = getRandoWmIntInclusive(1, 100);
    const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    const isEven = randomNumber % 2 === 0;
    const isCorrectAnswer = (answer === 'yes' && isEven) || (answer === 'no' && !isEven);

    if (isCorrectAnswer) {
      console.log('Correct!');
    } else {
      const correctAnswer = isEven && answer === 'no' ? 'yes' : 'no';
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${nameOfUser}!`);
    }
  }
  return console.log(`Congratulations, ${nameOfUser}!`);
};
