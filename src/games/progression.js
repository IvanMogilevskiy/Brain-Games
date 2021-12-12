const makeProgression = () => {
  const numbers = [];
  const getRandomInt = (max) => Math.ceil(Math.random() * max);
  let number = getRandomInt(10);
  const progressionStep = getRandomInt(10);
  numbers.push(number);

  for (let i = 0; i < 9; i += 1) {
    number += progressionStep;
    numbers.push(number);
  }

  return numbers;
};

export default makeProgression;
