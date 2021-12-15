import { evaluate } from 'mathjs';
import { cons } from '@hexlet/pairs';
import playBrainGames from '../index.js';

const playBrainCalc = () => {
  const rules = 'What is the result of the expression?';
  const symbols = ['+', '-', '*'];
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const QAPairs = [];

  const generateQA = () => {
    for (let i = 0; i < 3; i += 1) {
      const number1 = getRandomInt(10);
      const number2 = getRandomInt(10);
      const symbol = symbols[getRandomInt(3)];
      const question = `Question: ${number1} ${symbol} ${number2}`;
      let correctAnswer = 0;
      switch (symbol) {
        case '+':
          correctAnswer = String(evaluate(number1 + number2));
          break;

        case '-':
          correctAnswer = String(evaluate(number1 - number2));
          break;

        case '*':
          correctAnswer = String(evaluate(number1 * number2));
          break;

        default:
          correctAnswer = NaN;
          break;
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
