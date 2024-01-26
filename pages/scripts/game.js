const ball = document.getElementById("ball");
const paddle1 = document.getElementById("paddle1");
const paddle2 = document.getElementById("paddle2");
const scoreDisplay1 = document.getElementById("score1");
const scoreDisplay2 = document.getElementById("score2");

let ballX = 390;
let ballY = 190;
let ballSpeedX = 1;
let ballSpeedY = 1;
let score1 = 0;
let score2 = 0;

function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  if (ballY + 20 > 400 || ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballX + 20 > 800) {
    score1++;
    resetBall();
    updateScore();
  } else if (ballX < 0) {
    score2++;
    resetBall();
    updateScore();
  }

  const paddle1Y = parseInt(window.getComputedStyle(paddle1).top);
  const paddle2Y = parseInt(window.getComputedStyle(paddle2).top);

  if (ballX + 20 > 780 && ballY + 10 >= paddle2Y && ballY <= paddle2Y + 80) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballX < 20 && ballY + 10 >= paddle1Y && ballY <= paddle1Y + 80) {
    ballSpeedX = -ballSpeedX;
  }
}

function resetBall() {
  ballX = 390;
  ballY = 190;
  ballSpeedX = -ballSpeedX;
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";
}

function updateScore() {
  scoreDisplay1.textContent = score1;
  scoreDisplay2.textContent = score2;
}

document.addEventListener("keydown", function(event) {
  const paddleSpeed = 5;
  const key = event.key;
  const paddle1Y = parseInt(window.getComputedStyle(paddle1).top);
  const paddle2Y = parseInt(window.getComputedStyle(paddle2).top);

  if (key === "w" && paddle1Y > 0) {
    paddle1.style.top = paddle1Y - paddleSpeed + "px";
  } else if (key === "s" && paddle1Y < 320) {
    paddle1.style.top = paddle1Y + paddleSpeed + "px";
  }

  if (key === "ArrowUp" && paddle2Y > 0) {
    paddle2.style.top = paddle2Y - paddleSpeed + "px";
  } else if (key === "ArrowDown" && paddle2Y < 320) {
    paddle2.style.top = paddle2Y + paddleSpeed + "px";
  }
});

setInterval(moveBall, 10);
