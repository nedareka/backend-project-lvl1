#!/usr/bin/env node
import { greeting, getName, hello } from '../..';

greeting();
const name = getName();
hello(name);
