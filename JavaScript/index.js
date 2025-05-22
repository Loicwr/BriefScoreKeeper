let buttonP1 = document.getElementById("buttonP1");
let buttonP2 = document.getElementById("buttonP2");
let buttonReset = document.getElementById("buttonReset");
let scorePlayer1 = document.getElementById("scorePlayer1");
let scorePlayer2 = document.getElementById("scorePlayer2");
let scoreMaximun = document.getElementById("scoreMaximun");
let messageGagnant = document.getElementById("messageGagnant")

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
            scorePlayer1.classList.add("gagnant");
            scorePlayer2.classList.add("perdu");
            alert("Joueur 1 a gagné !");
            messageGagnant.textContent = "Joueur 1 a gagné !";
        }
    }
});

buttonP2.addEventListener("click", () => {
    if (!gameOver){
        scoreP2++;
        scorePlayer2.textContent = scoreP2;
        if (scoreP2 === scoreWin){
            gameOver = true;
            scorePlayer2.classList.add("gagnant");
            scorePlayer1.classList.add("perdu");
            alert("Joueur 2 a gagné !");
            messageGagnant.textContent = "Joueur 2 a gagné !";
        }
    }
});

buttonReset.addEventListener("click", resetGame);

function resetGame(){
    scoreP1 = 0;
    scoreP2 = 0;
    gameOver = false;
    scorePlayer1.textContent = 0;
    scorePlayer2.textContent = 0;
    scorePlayer1.classList.remove("Gagnant", "Perdu");
    scorePlayer2.classList.remove("Gagnant", "Perdu");
    messageGagnant.textContent = "";
}