import readlineSync from 'readline-sync';

const countRounds = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  const [gameRound, rulesGame] = game();
  console.log(rulesGame);
  for (let i = 0; i < countRounds; i += 1) {
    const [question, correctAnswer] = gameRound();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer !== correctAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${nameOfUser}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${nameOfUser}!`);
};
