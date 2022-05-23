
const timer = document.querySelector('.timer');
const startTime = 40;
const endTime = -1;
let currentTime = startTime - 1;
timer.textContent = startTime;

const speed = document.querySelector('.speed');
const startSpeed = 0;
let currentSpeed = startSpeed;
speed.textContent = startSpeed;

const score = document.querySelector('.score');
const scoreBoard = 0;
let currentScore = scoreBoard;
score.textContent = scoreBoard;

const time = document.querySelector('.time');
const starTime = 0;
let currenTime = starTime;
time.textContent = starTime;

const size = document.querySelector('.size');
const startSize = 4;
let currentSize = startSize;
size.textContent = startSize;


function tick() {
  timer.textContent = currentTime;

  score.textContent = currentScore;

  time.textContent = currenTime;

  speed.textContent = currentSpeed;

  size.textContent = currentSize;

  currentTime -= 1;
  currenTime += 1;
  currentSize +=0;
  if  (currentSize <= 2){
      sizeDifference = 3-currentSize
      currentSize += sizeDifference
  }
  if (currentTime <=0){
      bomb.x = getRandomInt(0, 25) * grid;
      bomb.y = getRandomInt(0, 25) * grid;
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
      teleport.x = getRandomInt(0, 25) * grid;
      teleport.y = getRandomInt(0, 25) * grid;
      teleport1.x = getRandomInt(0, 25) * grid;
      teleport1.y = getRandomInt(0, 25) * grid;
  }
  if (currentTime <= endTime) { 
        currentSpeed -= 1
    currentScore -= currentSize*2
        
    currentTime = startTime;
    currentSize -=1
    snake.x = getRandomInt(0, 25) * grid;
    snake.y = getRandomInt(0, 25) * grid;
    snake.cells = [];
    snake.dx = grid;
    snake.dy = 0;
    apple.x = getRandomInt(0, 25) * grid;
    apple.y = getRandomInt(0, 25) * grid;
    }
  
}


const timerId = setInterval(tick, 1000);