#!/usr/bin/env node
import {
  greeting, getName, getRandInt, getAnsw, hello, getRandSign, printWrong,
  printRight, getCalcRes,
} from '../..';

greeting();
console.log('What is the result of the expression?');
const name = getName();
hello(name);
const startInt = 1;
const endInt = 100;

for (let i = 1; i <= 3; i += 1) {
  const num1 = getRandInt(startInt, endInt);
  const num2 = getRandInt(startInt, endInt);
  const sign = getRandSign();
  // let result;
  console.log(`Question: ${num1} ${sign} ${num2}`);

  const result = getCalcRes(num1, num2, sign);

  const ans = Number(getAnsw());
  if (ans !== result) {
    printWrong(ans, result, name);
    break;
  }

  printRight(i, name);
}
