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
const cycles = 3;

for (let i = 0; i < cycles; i += 1) {
  const firstNum = getRandInt(startInt, endInt);
  const diff = getRandInt(1, endDiff);
  const empty = getRandInt(1, elem);
  const seq = makeSeq(firstNum, diff, elem);
  printQuest(seq, empty);
  const ans = getAnsw();
  const emptyVal = seq[empty - 1];
  if (Number(ans) !== emptyVal) {
    printWrong(ans, emptyVal, name);
    break;
  }
  printRight((i === cycles - 1), name);
}
