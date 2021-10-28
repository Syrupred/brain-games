#!/usr/bin/env node
import brainGames from '../src/index.js';
import prime from '../src/games/prime.js';

brainGames(prime, 'Answer "yes" if given number is prime. Otherwise answer "no".');
