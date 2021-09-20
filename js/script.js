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

placeholder(word);

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

