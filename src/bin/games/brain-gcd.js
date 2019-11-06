#!/usr/bin/env node
import {
  greeting, getName, getRandInteger, getAnsw, hello, printWrong, printRight,
  divisor,
} from '../..';

greeting();
console.log('Find the greatest common divisor of given numbers.');
const name = getName();
hello(name);

for (let i = 1; i <= 3; i += 1) {
  const num1 = getRandInteger();
  const num2 = getRandInteger();
  const gcd = divisor(num1, num2);
  console.log(`Question: ${num1} ${num2}`);
  const ans = Number(getAnsw());

  if (ans !== gcd) {
    printWrong(ans, gcd, name);
    break;
  }

  printRight(i, name);
}
