import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';
import getRandomInt from './randomizer.js';

const playBrainCalc = () => {
  const rules = 'What is the result of the expression?';
  const symbols = ['+', '-', '*'];
  const QAPairs = [];

  const generateQA = () => {
    for (let i = 0; i < 3; i += 1) {
      const number1 = getRandomInt(0, 11);
      const number2 = getRandomInt(0, 11);
      const symbol = symbols[getRandomInt(0, 3)];
      const question = `${number1} ${symbol} ${number2}`;
      let correctAnswer = 0;
      switch (symbol) {
        case '+':
          correctAnswer = String(number1 + number2);
          break;

        case '-':
          correctAnswer = String(number1 - number2);
          break;

        case '*':
          correctAnswer = String(number1 * number2);
          break;

        default:
          throw new Error('The format of the operation is incorrect');
      }
      const QAPair = cons(question, correctAnswer);

      QAPairs.push(QAPair);
    }
  };
  generateQA();
  const inputForEngine = cons(rules, QAPairs);
  playBrainGames(inputForEngine);
};
export default playBrainCalc;
