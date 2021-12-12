import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import makeProgression from './progression.js';

const playBrainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const QAPairs = [];

  const generateQA = () => {
    for (let i = 0; i < 3; i += 1) {
      const numbers = makeProgression();
      const randomIndex = getRandomInt(numbers.length);
      const correctAnswer = String(numbers[randomIndex]);
      numbers[randomIndex] = '..';
      const progression = numbers.join(' ');
      const question = `Question: ${progression}`;
      const QAPair = cons(question, correctAnswer);

      QAPairs.push(QAPair);
    }
  };
  generateQA();
  const inputForEngine = cons(rules, QAPairs);
  playBrainGames(inputForEngine);
};

export default playBrainProgression;
