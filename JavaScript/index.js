let buttonP1 = document.getElementById("buttonP1");
let buttonP2 = document.getElementById("buttonP2");
let buttonReset = document.getElementById("buttonReset");
let scorePlayer1 = document.getElementById("scorePlayer1");
let scorePlayer2 = document.getElementById("scorePlayer2");
let scoreMaximun = document.getElementById("scoreMaximun");

let scoreP1 = 0;
let scoreP2 = 0;
let scoreWin = parseInt(scoreMaximun.value);
let gameOver = false;

scoreMaximun.addEventListener("change",() => {
    scoreWin = parseInt(scoreMaximun.value);
    resetGame();
});

buttonP1.addEventListener("click", () => {
    if (!gameOver){
        scoreP1++;
        scorePlayer1.textContent = scoreP1;
        if (scoreP1 === scoreWin){
            gameOver = true;
            scorePlayer1.classList.add("Gagner");
            scorePlayer2.classList.add("Perdu");
        }
    }
});

buttonP2.addEventListener("click", () => {
    if (!gameOver){
        scoreP2++;
        scorePlayer2.textContent = scoreP2;
        if (scoreP2 === scoreWin){
            gameOver = true;
            scorePlayer2.classList.add("Gagner");
            scorePlayer1.classList.add("Perdu");
        }
    }
});

