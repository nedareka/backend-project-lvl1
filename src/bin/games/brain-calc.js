#!/usr/bin/env node
import {
  greeting, getName, getRandInteger, getAnsw, hello, getRandSign, printWrong,
  printRight,
} from '../..';

greeting();
console.log('What is the result of the expression?');
const name = getName();
hello(name);

for (let i = 1; i <= 3; i += 1) {
  const num1 = getRandInteger();
  const num2 = getRandInteger();
  const sign = getRandSign();
  let result;
  console.log(`Question: ${num1} ${sign} ${num2}`);

  switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      console.log('Something went wrong');
  }

  const ans = Number(getAnsw());
  if (ans !== result) {
    printWrong(ans, result, name);
    break;
  }

  printRight(i, name);
}
