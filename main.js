const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

// Iteration 1
function drawGrid() {
  for (let i = 0; i < width; i += 50) {
    for (let x = 0; x < height; x += 50) {
      context.strokeRect(i, x, 50, 50);
    }
  }
}

class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  moveUp() {
    this.row -= 1;
  }

  moveRight() {
    this.col += 1;
  }

  moveDown() {
    this.row += 1;
  }

  moveLeft() {
    this.col -= 1;
  }
}

function drawPlayer(col, row) {
  const playerImg = new Image(50, 50);
  playerImg.src = "./images/character-down.png";

  playerImg.onload = () => {
    context.drawImage(playerImg, col, row, 50, 50);
  };
}

class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.treasureImg = new Image();
  }

  drawTreasure() {
    this.treasureImg.src = "./images/treasure.png";

    this.treasureImg.onload = () => {
      context.drawImage(this.treasureImg, this.col, this.row, 50, 50);
    };
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 50;
    this.row = Math.floor(Math.random() * 10) * 50;
  }
}

let treasure = new Treasure();

window.addEventListener("keydown", (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      console.log("left");
      break;
    case 38:
      console.log("up");
      break;
    case 39:
      console.log("right");
      break;
    case 40:
      console.log("down");
      break;
  }
});

function drawEverything() {
  drawGrid();

  drawPlayer(0, 0);
  treasure.setRandomPosition();
  treasure.drawTreasure();
}

drawEverything();
