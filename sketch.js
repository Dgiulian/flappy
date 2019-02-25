let bird;
let pipes = [];
let score = 0;
let maxScore= 0;
let isOver = false;
let gameOverFrame = 0;
function setup() {
  createCanvas(1200, 400);
  reset();

}

function draw() {
  background(0);

  for (let i = pipes.length - 1; i >= 0; i--) {
    let pipe = pipes[i];
    pipe.update();
    
    if (pipe.pass(bird)) {
      score++;
    }
    if (pipe.hits(bird)) {
      gameOver();
    }
    if (pipe.offScreen()) {
      pipes.splice(i, 1);
    }
  }
  bird.update();
  if (bird.dead) { gameOver()};
  for (let pipe of pipes) {
    pipe.show();
  }
  if ((frameCount -  gameOverFrame)  % 150 === 0) {
    pipes.push(new Pipe());
  }
  bird.show();
  showScores();

}
function keyPressed({ keyCode }) {
  if (keyCode === 32) {
    bird.up();
    if ( isOver ) reset();
  }
}

function gameOver() {
  textSize(64);
  textAlign(CENTER, CENTER);
  text('GAME OVER', width / 2, height / 2);
  textAlign(LEFT, BASELINE);
  maxScore = max(score, maxScore);
  isOver = true;
  noLoop();
}


function showScores() {
  textSize(32);
  text('score: ' + score, 1, 32);
  text('record: ' + maxScore, 1, 64);
}


function reset() {
  bird = new Bird();
  pipes = [];
  pipes.push(new Pipe());
  isOver = false;
  score = 0;
  gameOverFrame = frameCount - 1;
  loop()
}