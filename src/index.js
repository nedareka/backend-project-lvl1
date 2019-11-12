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

const getRandInt = (min, max) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const getRandSign = () => {
  let sign = '';
  switch (getRandInt(1, 3)) {
    case 1:
      sign = '+';
      break;
    case 2:
      sign = '-';
      break;
    case 3:
      sign = '*';
      break;
    default:
      console.log('Something went wrong');
  }
  return sign;
};

const getCalcRes = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return console.log('Something went wrong');
  }
};

const isEven = (n) => {
  if (n % 2 === 0) return true;
  return false;
};

const getAnsw = () => {
  const ans = readlineSync.question('Your answer: ');
  return ans;
};

const answRight = (ans, OK) => {
  if ((OK && (ans === 'yes')) || (!OK && (ans === 'no'))) {
    return true;
  }
  return false;
};

const printWrong = (wrong, right, name) => {
  console.log(`"${wrong}" is a wrong answer ;(. The correct answer was "${right}".`);
  console.log(`Let's try again, ${name}!`);
};

const printRight = (end, name) => {
  console.log('Correct!');
  if (end) {
    console.log(`Congratulations, ${name}`);
  }
};

const divisor = (a, b) => {
  const nmax = Math.max(a, b);
  const nmin = Math.min(a, b);

  const devisorNorm = (max, min) => {
    if (max % min === 0) {
      return min;
    }
    return devisorNorm(min, max % min);
  };
  return devisorNorm(nmax, nmin);
};

const makeSeq = (firstNum, diff, elem) => {
  const s = [];
  for (let i = 0; i < elem; i += 1) {
    s[i] = firstNum + i * diff;
  }
  return s;
};

const printQuest = (seq, empty) => {
  let str = '';
  for (let i = 0; i < seq.length; i += 1) {
    if (i === empty - 1) {
      str += ' ..';
    } else {
      str += ` ${seq[i]}`;
    }
  }
  return console.log(`Question:${str}`);
};

const isPrime = (num) => {
  const divMax = Math.floor(Math.sqrt(num));
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  for (let div = 2; div <= divMax; div += 1) {
    if (num % div === 0) {
      return false;
    }
  }
  return true;
};

const brainCalc = () => {
  greeting();
  console.log('What is the result of the expression?');
  const name = getName();
  hello(name);
  const startInt = 1;
  const endInt = 100;
  const cycles = 3;

  for (let i = 0; i < cycles; i += 1) {
    const num1 = getRandInt(startInt, endInt);
    const num2 = getRandInt(startInt, endInt);
    const sign = getRandSign();
    console.log(`Question: ${num1} ${sign} ${num2}`);

    const result = getCalcRes(num1, num2, sign);

    const ans = Number(getAnsw());
    if (ans !== result) {
      printWrong(ans, result, name);
      break;
    }

    printRight((i === cycles - 1), name);
  }
};

const brainEven = () => {
  greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const name = getName();
  hello(name);
  const startInt = 1;
  const endInt = 100;
  const cycles = 3;

  for (let i = 0; i < cycles; i += 1) {
    const num = getRandInt(startInt, endInt);
    console.log(`Question: ${num}`);
    const ans = getAnsw();
    const even = isEven(num);

    let key = 'no';

    if (!answRight(ans, even)) {
      if (even) {
        key = 'yes';
      }
      printWrong(ans, key, name);
      break;
    }

    printRight((i === cycles - 1), name);
  }
};

export {
  greeting, hello, getName, getRandInt, isEven, getAnsw, answRight,
  getRandSign, printWrong, printRight, divisor, makeSeq, printQuest,
  getCalcRes, isPrime, brainCalc, brainEven,
};
