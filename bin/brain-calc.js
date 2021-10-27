#!/usr/bin/env node
import brainGames from '../src/index.js';
import calc from '../src/games/calc.js';

brainGames(calc, 'What is the result of the expression?');
