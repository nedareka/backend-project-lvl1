#!/usr/bin/env node
import {
  greeting, getName, getRandInt, getAnsw, hello, printWrong, isPrime,
  printRight, answRightPrime,
} from '../..';

greeting();
console.log('What is the result of the expression?');
const name = getName();
hello(name);
const startInt = 1;
const endInt = 100;

for (let i = 1; i <= 3; i += 1) {
  const num = getRandInt(startInt, endInt);
  console.log(`Question: ${num}`);
  const ans = getAnsw();

  let key = 'no';

  if (!answRightPrime(num, ans)) {
    if (isPrime(num)) {
      key = 'yes';
    }
    printWrong(ans, key, name);
    break;
  }

  printRight(i, name);
}
