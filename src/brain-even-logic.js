import readlineSync from 'readline-sync';

const playBrainEven = () => {
  const name = readlineSync.question('May I have your name?');

  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i < 4; i += 1) {
    const getRandomInt = (max) => Math.floor(Math.random() * max);
    const number = getRandomInt(100);
    const isEven = () => number % 2 === 0;
    const answer = readlineSync.question(`Question: ${number}`);

    console.log(`Your answer: ${answer}`);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${name}!`
      );
      break;
    }
    if (answer === correctAnswer) {
      console.log('Correct!');
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default playBrainEven;
