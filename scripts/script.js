function play() {
  addClassById('home-screen', 'hidden');
  addClassById('score-screen', 'hidden');
  removeClassById('playground-screen', 'hidden');
  setTextElementValueById('current-life', 4);
  setTextElementValueById('current-score', 0);

  continueGame();
}

function continueGame() {
  const alphabet = getARandomAlphabet();
  const currentAlphabetElement = document.getElementById('current-alphabet');
  currentAlphabetElement.innerText = alphabet.toUpperCase();
  addClassById(alphabet, 'bg-[#FFA500]');
}

document.addEventListener('keyup', function (event) {
  const playerPressed = event.key;

  const homeScreen = isClassContain('home-screen', 'hidden');
  const playgroundScreen = isClassContain('playground-screen', 'hidden');
  const scoreScreen = isClassContain('score-screen', 'hidden');

  if (homeScreen !== true || scoreScreen !== true) {
    if (playerPressed === 'Enter') {
      play();
      setTextElementValueById('current-life', 5);
    }
  }

  if (playgroundScreen != true) {
    if (playerPressed === 'Escape') {
      gameOver();
    }
  }

  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();

  if (playerPressed === currentAlphabet) {
    const currentScore = getTextElementValueById('current-score');
    const newScore = currentScore + 1;
    setTextElementValueById('current-score', newScore)

    removeClassById(currentAlphabet, 'bg-[#FFA500]');
    continueGame();
  }

  else {
    const currentLife = getTextElementValueById('current-life');
    const newLife = currentLife - 1;
    setTextElementValueById('current-life', newLife)
    if (newLife == 0) {
      gameOver();
    }
  }
})

function gameOver() {
  addClassById('playground-screen', 'hidden');
  removeClassById('score-screen', 'hidden');

  const finalScore = getTextElementValueById('current-score');
  setTextElementValueById('game-score', finalScore);

  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
  removeClassById(currentAlphabet, 'bg-[#FFA500]');
}

