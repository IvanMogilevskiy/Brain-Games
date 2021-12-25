import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const playBrainGames = (inputForEngine) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const task = car(inputForEngine);
  const qaPairs = cdr(inputForEngine);
  console.log(task);

  /* eslint-disable-next-line no-restricted-syntax */
  for (const qaPair of qaPairs) {
    const question = car(qaPair);

    console.log(`Question: ${question}`);

    const correctAnswer = cdr(qaPair);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`);
      break;
    }
    if (answer === correctAnswer) {
      console.log('Correct!');
    }
    if (qaPairs.indexOf(qaPair) === qaPairs.length - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default playBrainGames;
