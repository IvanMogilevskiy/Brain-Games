import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import getRandomInt from '../randomizer.js';

const playBrainProgression = () => {
  const task = 'What number is missing in the progression?';
  const qaPairs = [];
  const numberOfRounds = 3;
  const progressionLength = 8;

  const makeProgression = (firstNumber, progressionStep) => {
    const numbers = [];
    numbers.push(firstNumber);
    let number = firstNumber + progressionStep;
    numbers.push(number);
    for (let i = 0; i < progressionLength; i += 1) {
      number += progressionStep;
      numbers.push(number);
    }
    return numbers;
  };

  const generateQA = () => {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const numbers = makeProgression(getRandomInt(0, 11), getRandomInt(1, 11));
      const randomIndex = getRandomInt(0, numbers.length);
      const correctAnswer = String(numbers[randomIndex]);
      numbers[randomIndex] = '..';
      const question = numbers.join(' ');
      const qaPair = cons(question, correctAnswer);

      qaPairs.push(qaPair);
    }
  };
  generateQA();
  const inputForEngine = cons(task, qaPairs);
  playBrainGames(inputForEngine);
};

export default playBrainProgression;
