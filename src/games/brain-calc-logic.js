import playBrainGames from '../index.js';
import getRandomInt from '../randomizer.js';

const playBrainCalc = () => {
  const task = 'What is the result of the expression?';
  const symbols = ['+', '-', '*'];
  const numberOfOperations = symbols.length;
  const qaPairs = [];
  const numberOfRounds = 3;

  const generateQA = () => {
    for (let i = 0; i < numberOfRounds; i += 1) {
      const number1 = getRandomInt(0, 11);
      const number2 = getRandomInt(0, 11);
      const symbol = symbols[getRandomInt(0, numberOfOperations)];
      const question = `${number1} ${symbol} ${number2}`;
      let correctAnswer;
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
      const qaPair = [question, correctAnswer];

      qaPairs.push(qaPair);
    }
  };
  generateQA();
  const inputForEngine = [task, qaPairs];
  playBrainGames(inputForEngine);
};
export default playBrainCalc;
