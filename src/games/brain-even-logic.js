import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import getRandomInt from '../randomizer.js';

const playBrainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const qaPairs = [];
  const numberOfRounds = 3;

  const generateQA = () => {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const number = getRandomInt(0, 30);
      const isEven = () => number % 2 === 0;
      const question = `${number}`;
      const correctAnswer = isEven(number) ? 'yes' : 'no';
      const qaPair = cons(question, correctAnswer);

      qaPairs.push(qaPair);
    }
  };
  generateQA();
  const inputForEngine = cons(task, qaPairs);
  playBrainGames(inputForEngine);
};

export default playBrainEven;
