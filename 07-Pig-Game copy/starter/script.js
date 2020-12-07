'use strict';

// Selecting Elements
const score0 = document.querySelector('#score--0'); // Hash is selector for id
const score1 = document.getElementById('score--1'); // Same result, just different way.
const diceElemenet = document.querySelector('.dice');
const buttonNew = document.querySelector('.btn--new');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const player1 = document.getElementById('current--0');
const player2 = document.getElementById('current--1');
const activePlayer1 = document.querySelector('.player--0');
const activePlayer2 = document.querySelector('.player--1');

let scores;
let currentScore;
let activePlayer;
let playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;

  diceElemenet.classList.add('hidden');
  activePlayer1.classList.remove('player--winner');
  activePlayer2.classList.remove('player--winner');
  activePlayer1.classList.add('player--active');
  activePlayer2.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  activePlayer1.classList.toggle('player--active');
  activePlayer2.classList.toggle('player--active');
};

// Rolling
buttonRoll.addEventListener('click', function () {
  if (playing) {
    // Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display the dice
    diceElemenet.classList.remove('hidden');
    diceElemenet.src = `dice-${dice}.png`;

    // Check for a rolled 1. If true switch
    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to the score of the active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

buttonNew.addEventListener('click', init);
