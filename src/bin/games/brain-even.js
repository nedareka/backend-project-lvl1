#!/usr/bin/env node
import {
  greeting, getName, getRandInt, isEven, getAnsw, answRight, hello,
  printWrong, printRight,
} from '../..';

greeting();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const name = getName();
hello(name);
const startInt = 1;
const endInt = 100;

for (let i = 1; i <= 3; i += 1) {
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

  printRight(i, name);
}
