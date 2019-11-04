#!/usr/bin/env node
import {
  greeting, getName, getRandInteger, ifEven, getAnsw, answRight,
} from '..';

greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = getName();
console.log(`Hello, ${name}!`);

for (let i = 1; i <= 3; i += 1) {
  const num = getRandInteger();
  console.log(`Question: ${num}`);
  const ans = getAnsw();
  if (answRight(num, ans)) {
    console.log('Correct!');
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
    }
  } else if (ifEven(num)) {
    console.log(`"${ans}" is wrong answer ;(. Correct answer was "yes".`);
    console.log(`Let's try again, ${name}!`);
    break;
  } else {
    console.log(`"${ans}" is wrong answer ;(. Correct answer was "no".`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
