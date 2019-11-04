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

  let key = 'no';

  if (!answRight(num, ans)) {
    if (ifEven(num)) {
      key = 'yes';
    }
    console.log(`"${ans}" is the wrong answer ;(. The correct answer was "${key}".`);
    console.log(`Let's try again, ${name}!`);
    break;
  }

  console.log('Correct!');
  if (i === 3) {
    console.log(`Congratulations, ${name}`);
  }
}
