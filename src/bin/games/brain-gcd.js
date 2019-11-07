#!/usr/bin/env node
import {
  greeting, getName, getRandInt, getAnsw, hello, printWrong, printRight,
  divisor,
} from '../..';

greeting();
console.log('Find the greatest common divisor of given numbers.');
const name = getName();
hello(name);
const startInt = 1;
const endInt = 100;

for (let i = 1; i <= 3; i += 1) {
  const num1 = getRandInt(startInt, endInt);
  const num2 = getRandInt(startInt, endInt);
  const gcd = divisor(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const ans = Number(getAnsw());

  if (ans !== gcd) {
    printWrong(ans, gcd, name);
    break;
  }

  printRight(i, name);
}
