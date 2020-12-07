'use strict';

const score0 = document.querySelector('#score--0'); // Hash is selector for id
const score1 = document.getElementById('score--1'); // Same result, just different way.
const diceElemenet = document.querySelector('.dice');

score0.textContent = 0;
score1.textContent = 0;
diceElemenet.classList.add('hidden');
