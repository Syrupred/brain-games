#!/usr/bin/env node
import brainGames from '../src/index.js';
import even from '../src/games/even.js';

brainGames(even, "Answer 'yes' if the number is even, otherwise answer 'no'.");
