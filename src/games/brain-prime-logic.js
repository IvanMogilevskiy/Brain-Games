import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import getRandomInt from '../randomizer.js';

const playBrainPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const qaPairs = [];
  const numberOfRounds = 3;

  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= number / 2; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }

    return true;
  };

  const generateQA = () => {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const number = getRandomInt(0, 100);
      const question = `${number}`;
      const correctAnswer = isPrime(number) ? 'yes' : 'no';
      const qaPair = cons(question, correctAnswer);

      qaPairs.push(qaPair);
    }
  };
  generateQA();
  const inputForEngine = cons(task, qaPairs);
  playBrainGames(inputForEngine);
};

export default playBrainPrime;
