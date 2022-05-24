
  
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grid = 16;

var snake = {
  x: 160,
  y: 160,
  dx: grid,
  dy: 0,
  cells: [],
  maxCells: 4,
};
    
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
g = getRandomInt(0, 25) * grid
h = getRandomInt(0, 25) * grid
var count = 0;
var apple = {
  x: g,
  y: h
};
n = getRandomInt(0, 25) * grid
b = getRandomInt(0, 25) * grid
var count = 0;
var teleport = {
  x: n,
  y: b
};
x = getRandomInt(0, 25) * grid
z = getRandomInt(0, 25) * grid
var teleport1 = {
  x: x,
  y: z
};

d = getRandomInt(0, 25) * grid
c = getRandomInt(0, 25) * grid
var blocks = {
x: d,
y: c
};
he = getRandomInt(0, 25) * grid
po = getRandomInt(0, 25) * grid
var bomb = {
x: he,
y: po
};
// entire game loop
function loop() {
  requestAnimationFrame(loop);
  // slow game loop to 15 fps instead of 60 - 60/15 = 4
  if (++count < 60) {
    return;
  } 
  count = currentSpeed;
  context.clearRect(0,0,canvas.width,canvas.height);
  snake.x += snake.dx;
  snake.y += snake.dy;
  // wrap snake position on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }
  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});
  // remove cells as we move away from them
  if (snake.cells.length > currentSize) {
    snake.cells.pop();
  }
  // draw apple
  context.fillStyle = '#000000';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);
  context.fillStyle = '#FFC400';
  context.fillRect(apple.x-3, apple.y-3, grid-1, grid-1);
  // draw snake
    context.fillStyle = '#631D76';
  context.fillRect(teleport.x, teleport.y, grid-1, grid-1);
    context.fillStyle = '#631D76';
  context.fillRect(teleport1.x, teleport1.y, grid-1, grid-1);
  context.fillStyle = '#000000';

    context.fillStyle = '#000000';
    context.fillRect(blocks.x, blocks.y, grid-1, grid-1);
    context.fillStyle = '#EF3E36';
    context.fillRect(bomb.x, bomb.y, grid-1, grid-1);
 
    snake.cells.forEach(function(cell, index) {
    
    context.fillStyle = '#000000';
    context.fillRect(cell.x, cell.y, grid-1, grid-1);
    context.fillStyle = '#00FF3C';
    context.fillRect(cell.x-3, cell.y-3, grid-1, grid-1);
  
    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
        
        currentScore += currentTime*10;
        currentTime = startTime;
        if (currentSize % 5 == 0); {
            currentSpeed += 1;
        }
        currentSize += 1;
        snake.x = getRandomInt(0, 25) * grid;
        snake.y = getRandomInt(0, 25) * grid;
        snake.cells = [];
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
    }
    if (cell.x === blocks.x && cell.y === blocks.y) {
        if (e.which === 37 && snake.dx === 0);{
            snake.dx = grid;
            snake.dy = 0;
        }
        if (e.which === 38 && snake.dy === 0) {
            snake.dy = -grid;
            snake.dx = 0;
    }
        
    }
    if (cell.x === teleport.x && cell.y === teleport.y) {
        snake.x = teleport1.x ;
        snake.y = teleport1.y;
        snake.cells = [];
        snake.dx = grid;
        snake.dy = 0;
    }
    if (cell.x === teleport1.x && cell.y === teleport1.y) {
        snake.x = teleport.x;
        snake.y = teleport.y;
        snake.cells = [];
        snake.dx = -grid;
        snake.dy = -0;
    }
    if (cell.x === bomb.x && cell.y === bomb.y) {
        currentSize -= 4;
        currentScore -= 1;
        currentTime = startTime     ;
        snake.x = getRandomInt(0, 25) * grid;
        snake.y = getRandomInt(0, 25) * grid;
        snake.cells = [];
        snake.dx = grid;
        snake.dy = 0;
        bomb.x=800;
        bomb.y=400;
    }

    for (var i = index + 1; i < snake.cells.length; i++) {
      //for snake backwards hit
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        currentTime = 10;
        currentScore -= currentSize*3;

        currentSize -= 1;
        snake.x = getRandomInt(0, 25) * grid;
        snake.y = getRandomInt(0, 25) * grid;
        snake.cells = [];
        snake.dx = grid;
        snake.dy = 0;
        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;

      }
    }
  });
}
document.addEventListener('keydown', function(e) {
  // prevent snake from backtracking on itself
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
  if (e.which === 65 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  else if (e.which === 87 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  else if (e.which === 68 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  else if (e.which === 83 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

requestAnimationFrame(loop());
    