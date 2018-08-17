/*
GAME FUNCTION:
  Player must guess number between a min and a max
  Player gets limited amount of guesses
  Notify player of guesses remaining
  Notify player of the correct answer if they lose
  Let player choose to play again
*/

// GAME VALUES
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

    // UI ELEMENTS
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;

// PLAY AGAIN EVENT LISTENER
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

// Event listener for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // VALIDATE
  if(isNaN(guess) || guess < min ||  guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // CHECK IF CORRECT GUESS
  if(guess === winningNum) {
    // GAME OVER - USER WON
    gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
    // WRONG NUMBER
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // GAME OVER - USER LOST
      gameOver(false, `GG... Game Over. The correct number was ${winningNum}`);

    } else {
      // GAME CONTINUES - WRONG ANSWER

      // CHANGE BORDER COLOR
      guessInput.style.borderColor = 'red';

      // CLEAR INPUT
      guessInput.value = '';


      // DISPLAY MESSAGE
      setMessage(`${guess} is not correct, ${guessesLeft} guesses remaining`, 'red');
    }
  }
});

// GAME OVER FUNCTION
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // DISABLE INPUT
  guessInput.disabled = true;
  // CHANGE BORDER COLOR
  guessInput.style.borderColor = color;
  // SET TEXT COLOR
  message.style.color = color;
  // SET MESSAGE
  setMessage(msg);

  // PLAY AGAIN
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// GENERATE WINNING NUMBER FUNCTION
function getRandomNumber(min, max) {
  return (Math.floor(Math.random()*(max-min+1)+min));
}


// SET MESSAGE FUNCTION
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
