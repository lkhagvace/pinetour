const statusText = document.getElementById("status");

// 3 × 3 матриц — "" бол хоосон нүд
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let player = "❌";
let moves = 0;
let winner = "";
let gameOver = false;

// Мөр, багана, 2 диагональ — 3 нүд ижил бөгөөд хоосон биш бол ялагч
function findWinner() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      winner = board[i][0];
    }
    if (board[0][i] !== "" && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      winner = board[0][i];
    }
  }
  if (board[1][1] !== "" && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    winner = board[1][1];
  }
  if (board[1][1] !== "" && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
    winner = board[1][1];
  }
}

// onclick="play(1, 2)" → 1-р мөр, 2-р багана
function play(r, c) {
  if (!gameOver && board[r][c] === "") {
    board[r][c] = player;
    document.getElementById("cell" + r + c).textContent = player;
    moves++;
    findWinner();

    if (winner !== "") {
      statusText.textContent = `🎉 ${winner} яллаа!`;
      gameOver = true;
    } else if (moves === 9) {
      statusText.textContent = "🤝 Тэнцлээ";
      gameOver = true;
    } else {
      if (player === "❌") {
        player = "⭕";
      } else {
        player = "❌";
      }
      statusText.textContent = `Ээлж: ${player}`;
    }
  }
}

function restart() {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      board[r][c] = "";
      document.getElementById("cell" + r + c).textContent = "";
    }
  }
  player = "❌";
  moves = 0;
  winner = "";
  gameOver = false;
  statusText.textContent = `Ээлж: ${player}`;
}
