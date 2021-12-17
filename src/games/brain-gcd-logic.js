import { cons } from '@hexlet/pairs';
import gcd from './gcd.js';
import playBrainGames from '../index.js';
import getRandomInt from './randomizer.js';

const playBrainGCD = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const QAPairs = [];

  const generateQA = () => {
    for (let i = 0; i < 3; i += 1) {
      const number1 = getRandomInt(0, 11);
      const number2 = getRandomInt(0, 11);
      const question = `${number1} ${number2}`;
      const correctAnswer = String(gcd(number1, number2));
      const QAPair = cons(question, correctAnswer);

      QAPairs.push(QAPair);
    }
  };
  generateQA();
  const inputForEngine = cons(rules, QAPairs);
  playBrainGames(inputForEngine);
};

export default playBrainGCD;
