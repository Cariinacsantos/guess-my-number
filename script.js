'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //When there is no imput 
    if (!guess) {
        displayMessage('⛔ No number!')
    //When player wins
    } else if (guess < 0 || guess > 20) {
        displayMessage('❌ The number should be between 0 to 20.')
    } else if (guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('✅ Correct number!')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    //When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1){
            displayMessage(guess > secretNumber ? '📈 Too high! Try again.' : '📉 Too low! Try again.');
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                displayMessage('💥 You lost the game.');
                document.querySelector('.score').textContent = 0;
            }
    }
});

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random()* 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});