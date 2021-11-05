import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  return nameOfUser;
};

export default (game) => {
  const nameOfUser = greeting();
  const [roundGenerator, rulesGame] = game();
  console.log(rulesGame);
  for (let numberOfCorrectAnswers = 0; numberOfCorrectAnswers < 3; numberOfCorrectAnswers += 1) {
    const [question, correctResult] = roundGenerator();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctResult) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${nameOfUser}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${nameOfUser}!`);
};
