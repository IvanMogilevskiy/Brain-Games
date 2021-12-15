import getRandomInt from './randomizer.js';

const makeProgression = () => {
  const numbers = [];
  let number = getRandomInt(0, 11);
  const progressionStep = getRandomInt(1, 11);
  numbers.push(number);

  for (let i = 0; i < 9; i += 1) {
    number += progressionStep;
    numbers.push(number);
  }

  return numbers;
};

export default makeProgression;
