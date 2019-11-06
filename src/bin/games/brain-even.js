#!/usr/bin/env node
import {
  greeting, getName, getRandInt, ifEven, getAnsw, answRight, hello,
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

  let key = 'no';

  if (!answRight(num, ans)) {
    if (ifEven(num)) {
      key = 'yes';
    }
    printWrong(ans, key, name);
    break;
  }

  printRight(i, name);
}
