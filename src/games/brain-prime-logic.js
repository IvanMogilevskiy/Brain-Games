import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import isPrime from './isPrime.js';
import getRandomInt from './randomizer.js';

const playBrainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const QAPairs = [];

  const generateQA = () => {
    for (let i = 0; i < 3; i += 1) {
      const number = getRandomInt(0, 100);
      const question = `${number}`;
      const correctAnswer = isPrime(number) ? 'yes' : 'no';
      const QAPair = cons(question, correctAnswer);

      QAPairs.push(QAPair);
    }
  };
  generateQA();
  const inputForEngine = cons(rules, QAPairs);
  playBrainGames(inputForEngine);
};

export default playBrainPrime;
