let board = ["", "", "", "", "", "", "", "", ""];
let playerTurn = "X";
let playerXScore = 0;
let playerOScore = 0;

function cellClicked(cellIndex) {
  if (board[cellIndex] === "") {
    board[cellIndex] = playerTurn;
    document.getElementById("cell-" + cellIndex).innerHTML = playerTurn;
    checkForWinner();
    changePlayerTurn();
  }
}

function checkForWinner() {
  if (
    (board[0] === playerTurn &&
      board[1] === playerTurn &&
      board[2] === playerTurn) ||
    (board[3] === playerTurn &&
      board[4] === playerTurn &&
      board[5] === playerTurn) ||
    (board[6] === playerTurn &&
      board[7] === playerTurn &&
      board[8] === playerTurn) ||
    (board[0] === playerTurn &&
      board[3] === playerTurn &&
      board[6] === playerTurn) ||
    (board[1] === playerTurn &&
      board[4] === playerTurn &&
      board[7] === playerTurn) ||
    (board[2] === playerTurn &&
      board[5] === playerTurn &&
      board[8] === playerTurn) ||
    (board[0] === playerTurn &&
      board[4] === playerTurn &&
      board[8] === playerTurn) ||
    (board[2] === playerTurn &&
      board[4] === playerTurn &&
      board[6] === playerTurn)
  ) {
    alert(playerTurn + " player won!");
    addScore();
    resetBoard();
  } else if (!board.includes("")) {
    alert("Scoreless!");
    resetBoard();
  }
}

function addScore() {
  if (playerTurn === "X") {
    playerXScore++;
    document.getElementById("player-x-score").innerHTML = playerXScore;
  } else {
    playerOScore++;
    document.getElementById("player-o-score").innerHTML = playerOScore;
  }
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  playerTurn = "X";
  document.getElementById("player-turn").innerHTML = playerTurn;
  for (let i = 0; i < 9; i++) {
    document.getElementById("cell-" + i).innerHTML = "";
  }
}

function changePlayerTurn() {
  if (playerTurn === "X") {
    playerTurn = "O";
  } else {
    playerTurn = "X";
  }
  document.getElementById("player-turn").innerHTML = playerTurn;
}
