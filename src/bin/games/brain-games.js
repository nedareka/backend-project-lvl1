#!/usr/bin/env node
import { greeting, getName } from '..';

greeting();
const name = getName();
console.log(`Hello, ${name}!`);
