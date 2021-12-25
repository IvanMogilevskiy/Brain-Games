import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import getRandomInt from '../randomizer.js';

const playBrainGCD = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const qaPairs = [];
  const numberOfRounds = 3;

  const gcd = (number1, number2) => {
    if (number2 === 0) {
      return number1;
    }

    return gcd(number2, number1 % number2);
  };

  const generateQA = () => {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const number1 = getRandomInt(0, 11);
      const number2 = getRandomInt(0, 11);
      const question = `${number1} ${number2}`;
      const correctAnswer = String(gcd(number1, number2));
      const qaPair = cons(question, correctAnswer);

      qaPairs.push(qaPair);
    }
  };
  generateQA();
  const inputForEngine = cons(task, qaPairs);
  playBrainGames(inputForEngine);
};

export default playBrainGCD;
