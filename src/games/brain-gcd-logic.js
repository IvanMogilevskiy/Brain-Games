import { cons } from '@hexlet/pairs';
import gcd from './gcd.js';
import playBrainGames from '../index.js';
import getRandomInt from './randomizer.js';

const playBrainGCD = () => {
  const task = 'Find the greatest common divisor of given numbers.';
  const qaPairs = [];
  const numberOfRounds = 3;

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
