import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import getRandomInt from './randomizer.js';

const playBrainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const QAPairs = [];

  const makeProgression = (firstNumber, progressionStep) => {
    const numbers = [];
    numbers.push(firstNumber);
    let number = firstNumber + progressionStep;
    numbers.push(number);
    for (let i = 0; i < 8; i += 1) {
      number += progressionStep;
      numbers.push(number);
    }
    return numbers;
  };

  const generateQA = () => {
    for (let i = 0; i < 3; i += 1) {
      const numbers = makeProgression(getRandomInt(0, 11), getRandomInt(1, 11));
      const randomIndex = getRandomInt(0, numbers.length);
      const correctAnswer = String(numbers[randomIndex]);
      numbers[randomIndex] = '..';
      const progression = numbers.join(' ');
      const question = `${progression}`;
      const QAPair = cons(question, correctAnswer);

      QAPairs.push(QAPair);
    }
  };
  generateQA();
  const inputForEngine = cons(rules, QAPairs);
  playBrainGames(inputForEngine);
};

export default playBrainProgression;
