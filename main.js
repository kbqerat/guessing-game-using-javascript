'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

// functions to reduce the code and follow DRY rule
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

// starting the check button to check the player's guess
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   when input has a falsy value
  if (!guess) {
    displayMessage('No number');
  }
  //   when the player wins
  else if (guess === secretNumber) {
    // querySelector('message')='corrected number';
    displayMessage('🥵 Correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // if the player's guess was either high or low
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      displayScore(score);
      score--;
    } else {
      displayMessage('💣 You lost the game');
    }
  }
});

// start implementing the again button to reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = '0';
  document.querySelector('.highscore').textContent = highScore;
});
