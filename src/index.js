import readlineSync from 'readline-sync';

export default (game, phrase) => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  console.log(phrase);

  for (let numberOfCorrectAnswers = 0; numberOfCorrectAnswers < 3; numberOfCorrectAnswers += 1) {
    const [question, correctResult] = game();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correctResult) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${nameOfUser}!`);
    }
  }
  return console.log(`Congratulations, ${nameOfUser}!`);
};
