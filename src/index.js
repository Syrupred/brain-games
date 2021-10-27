import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import even from './games/even.js';

export default () => {
  const listOfGames = [calc, even];
  const listOfPhrases = ['What is the result of the expression?', "Answer 'yes' if the number is even, otherwise answer 'no'."];
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
  const selectedGame = readlineSync.question('Select game:\n Calc: 0 \n Even: 1\n');
  const currentGame = listOfGames[+selectedGame];
  console.log(listOfPhrases[+selectedGame]);

  for (let numberOfCorrectAnswers = 0; numberOfCorrectAnswers < 3; numberOfCorrectAnswers += 1) {
    const [question, correctResult] = currentGame();
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (answer === correctResult) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${nameOfUser}!`);
    }
  }
  return console.log(`Congratulations, ${nameOfUser}!`);
};
