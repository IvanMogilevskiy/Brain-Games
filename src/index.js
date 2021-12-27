import readlineSync from 'readline-sync';

const playBrainGames = (inputForEngine) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const [task, qaPairs] = inputForEngine;
  console.log(task);

  /* eslint-disable-next-line no-restricted-syntax */
  for (const qaPair of qaPairs) {
    const [question, correctAnswer] = qaPair;

    console.log(`Question: ${question}`);

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
