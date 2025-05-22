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
})