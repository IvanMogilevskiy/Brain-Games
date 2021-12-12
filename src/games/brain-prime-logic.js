import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import isPrime from './isPrime.js';

const playBrainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const QAPairs = [];

  const generateQA = () => {
    for (let i = 0; i < 3; i += 1) {
      const number = getRandomInt(100);
      const question = `Question: ${number}`;
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
