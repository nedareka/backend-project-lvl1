#!/usr/bin/env node
import {
  greeting, getName, getRandInteger, ifEven, answRight,
} from '..';

greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = getName();

for (let i = 1; i <= 3; i += 1) {
  const num = getRandInteger();
  console.log(`Question: ${num}`);
  if (answRight(num)) {
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
    }
  } else if (ifEven(num)) {
    console.log('"no" is wrong answer ;(. Correct answer was "yes".');
    console.log(`Let's try again, ${name}!`);
    break;
  } else {
    console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
