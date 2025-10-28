let targetNum;
let maxNum;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitGuess");
const message = document.getElementById("message");
const previousGuesses = document.getElementById("previousGuesses");
const restartBtn = document.getElementById("restartBtn");
const rangeText = document.getElementById("rangeText");

function startGame() {
    maxNum = parseInt(prompt("Enter the maximum number:"));
    while (!maxNum || maxNum < 1) {
        maxNum = parseInt(prompt("Please enter a valid number greater than 0:"));
    }

    targetNum = Math.floor(Math.random() * maxNum) + 1;
    attempts = 0;
    message.textContent = "";
    previousGuesses.textContent = "";
    guessInput.value = "";
    restartBtn.classList.add("hidden");
    submitBtn.disabled = false;

    rangeText.textContent = `1 and ${maxNum}`;

    console.log(`(Debug: Target Number is ${targetNum})`);
}

function checkGuess() {
    const guessValue = parseInt(guessInput.value);
    if (!guessValue || guessValue < 1 || guessValue > maxNum) {
        message.textContent = `⚠️ Enter a valid number between 1 and ${maxNum}.`;
        return;
    }

    attempts++;
    previousGuesses.textContent += guessValue + " ";

    if (guessValue === targetNum) {
        message.textContent = `🎉 You guessed it right in ${attempts} attempts!`;
        submitBtn.disabled = true;
        restartBtn.classList.remove("hidden");
    } else if (guessValue > targetNum) {
        message.textContent = "📉 Too high! Try again.";
    } else {
        message.textContent = "📈 Too low! Try again.";
    }

    guessInput.value = "";
    guessInput.focus();
}

submitBtn.addEventListener("click", checkGuess);
restartBtn.addEventListener("click", startGame);


startGame();
