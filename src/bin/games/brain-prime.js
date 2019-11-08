#!/usr/bin/env node
import {
  greeting, getName, getRandInt, getAnsw, hello, printWrong, isPrime,
  printRight, answRight,
} from '../..';

greeting();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const name = getName();
hello(name);
const startInt = 1;
const endInt = 100;

for (let i = 1; i <= 3; i += 1) {
  const num = getRandInt(startInt, endInt);
  console.log(`Question: ${num}`);
  const ans = getAnsw();
  const prime = isPrime(num);

  let key = 'no';

  if (!answRight(ans, prime)) {
    if (prime) {
      key = 'yes';
    }
    printWrong(ans, key, name);
    break;
  }

  printRight(i, name);
}
