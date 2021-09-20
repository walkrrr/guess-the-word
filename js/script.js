const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButtonElement = document.querySelector(".guess");
const textInputElement = document.querySelector(".guess-a-letter");
const progressElement = document.querySelector(".progress");
const remainingGuessesElement = document.querySelector(".remaining-guesses");
const emptyParagraph = document.querySelector(".empty-paragraph");
const hiddenButton = document.querySelector(".play-again");
const word = "magnolia";



const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

const getWord = async function () {
    const response = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/7061f1d4d3d5bfe47efbfbcfe42bf57e/raw/5ffc447694486e7dea686f34a6c085ae371b43fe/words.txt");
    const words = await response.text();
    const wordArray = words.split("\n");
    const randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex].trim();
    placeholder(word);

    getWord();

guessButtonElement.addEventListener("click",function (e) {
    e.preventDefault()
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
});

const showPlayerGuess = function () {
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        }
        }
    }

wordInProgress.innerText = revealWord.join("");
checkIfWin();

const updateGuessesRemaining = function (guess) {
    const upperWord = word.toUpperCase();
  if (!upperWord.includes(guess)) {
      message.innerText = 'Sorry, the word has no ${guess}.';
      remainingGuessesElement -=1;
  } else {
      message.innerText = `Good guess! The word has the letter ${guess}.`;
  }
}

if (remainingGuesses === 0) {
    message.innerHTML = `Game over! The word was <span class="highlight">${word}</span>`;
} else if (remainingGuesses ===1) {
    remainingGuessesElement.innerText = `${remainingGuesses} guess`;
} else {
    remainingGuessesElement.innerText = `${remainingGuesses} guesses`;
}

const checkIfWin = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`; 
    }
}
};
