import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('\nWelcome to the Brain Games!');
};

const hello = (name) => {
  console.log(`Hello, ${name}\n`);
};

const getName = () => {
  const name = readlineSync.question('\nMay I have your name? ');
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

const getAnsw = () => {
  const ans = readlineSync.question('Your answer: ');
  return ans;
};

const answRight = (num, ans) => {
  if ((ifEven(num) && (ans === 'yes')) || (!ifEven(num) && (ans === 'no'))) {
    return true;
  }
  return false;
};

export {
  greeting, hello, getName, getRandInteger, ifEven, getAnsw, answRight,
};
