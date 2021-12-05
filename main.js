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

//Character
class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }

  clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  moveUp() {
    this.row -= 50;
  }

  moveRight() {
    this.col += 50;
  }

  moveDown() {
    this.row += 50;
  }

  moveLeft() {
    this.col -= 50;
  }
}

function drawPlayer(col, row) {
  const playerImg = new Image(50, 50);
  playerImg.src = "./images/character-down.png";

  context.drawImage(playerImg, col, row, 50, 50);
}

//Treasure
class Treasure {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.treasureImg = new Image();
  }

  drawTreasure() {
    this.treasureImg.src = "./images/treasure.png";
    context.drawImage(this.treasureImg, this.col, this.row, 50, 50);
  }

  setRandomPosition() {
    this.col = Math.floor(Math.random() * 10) * 50;
    this.row = Math.floor(Math.random() * 10) * 50;
  }
}

//Create treasure & player1
let treasure = new Treasure();

let player1 = new Character(0, 0);

//Draw all canvas
function drawEverything() {
  drawGrid();

  drawPlayer(0, 0);

  treasure.setRandomPosition();

  treasure.drawTreasure();
}

drawEverything();

//Create interaction
window.addEventListener("keydown", (e) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  e.preventDefault();

  // React based on the key pressed
  switch (e.keyCode) {
    case 37:
      player1.moveLeft();

      break;
    case 38:
      player1.moveUp();

      break;
    case 39:
      player1.moveRight();

      break;
    case 40:
      player1.moveDown();
      break;
  }
  drawEverything();
});
