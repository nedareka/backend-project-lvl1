#!/usr/bin/env node
import {
  greeting, getName, getRandInt, getAnsw, hello, printWrong, printRight,
  printQuest, makeSeq,
} from '../..';

greeting();
console.log('What number is missed in the progression?');
const name = getName();
hello(name);
const startInt = 1;
const endInt = 10;
const endDiff = 10;
const elem = 10;

for (let i = 1; i <= 3; i += 1) {
  const firstNum = getRandInt(startInt, endInt);
  const diff = getRandInt(1, endDiff);
  const empty = getRandInt(1, elem);
  const seq = makeSeq(firstNum, diff, elem);
  printQuest(seq, empty);
  const ans = Number(getAnsw());
  const emptyVal = seq[empty - 1];
  if (ans !== emptyVal) {
    printWrong(ans, emptyVal, name);
    break;
  }

  printRight(i, name);
}
