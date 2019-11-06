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

const printWrong = (wrong, right, name) => {
  console.log(`"${wrong}" is a wrong answer ;(. The correct answer was "${right}".`);
  console.log(`Let's try again, ${name}!`);
};

const printRight = (i, name) => {
  console.log('Correct!');
  if (i === 3) {
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

export {
  greeting, hello, getName, getRandInt, ifEven, getAnsw, answRight,
  getRandSign, printWrong, printRight, divisor,

};
