import readlineSync from 'readline-sync';


const greeting = () => {
  console.log('Welcome to the Brain Games');
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getRandInteger = () => {
  const min = 0;
  const max = 1000;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ifEven = (n) => {
  if (n % 2 === 0) return true;
  return false;
};

const answRight = (num) => {
  const ans = readlineSync.question('Your answer: ');
  if ((ifEven(num) && (ans === 'yes')) || (!ifEven(num) && (ans === 'no'))) {
    return true;
  }
  return false;
};

export {
  greeting, getName, getRandInteger, ifEven, answRight,
};
