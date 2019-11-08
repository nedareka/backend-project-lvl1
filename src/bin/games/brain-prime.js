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
const cycles = 3;

for (let i = 0; i < cycles; i += 1) {
  const num = getRandInt(startInt, endInt);
  const prime = isPrime(num);
  console.log(`Question: ${num}`);
  const ans = getAnsw();

  let key = 'no';

  if (!answRight(ans, prime)) {
    if (prime) {
      key = 'yes';
    }
    printWrong(ans, key, name);
    break;
  }

  printRight((i === cycles - 1), name);
}
