import { cons } from '@hexlet/pairs';
import gcd from './gcd.js';
import playBrainGames from '../index.js';

const playBrainGCD = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const QAPairs = [];

  const generateQA = () => {
    for (let i = 0; i < 3; i += 1) {
      const number1 = getRandomInt(10);
      const number2 = getRandomInt(10);
      const question = `Question: ${number1} ${number2}`;
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
