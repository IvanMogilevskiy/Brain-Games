import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const playBrainGames = (inputForEngine) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
  const rules = car(inputForEngine);
  const QAPairs = cdr(inputForEngine);
  console.log(rules);

  /* eslint-disable-next-line */
  for (const QAPair of QAPairs) {
    const question = car(QAPair);
    const correctAnswer = cdr(QAPair);
    const answer = readlineSync.question(question);

    console.log(`Your answer: ${answer}`);

    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`
      );
      break;
    }
    if (answer === correctAnswer) {
      console.log('Correct!');
    }
    if (QAPairs.indexOf(QAPair) === QAPairs.length - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default playBrainGames;
