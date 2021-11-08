import readlineSync from 'readline-sync';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  const [gameRound, rulesGame] = game();
  console.log(rulesGame);
  const countRounds = 3;
  for (let i = 0; i < countRounds; i += 1) {
    const [question, correctResult] = gameRound();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer !== correctResult) {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${nameOfUser}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${nameOfUser}!`);
};
