import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { initalGrid } from "./initialGrid";
import { result as checkWinner } from "./result";
import { response } from "./computerResponse";

const gridDom = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");
const btn = document.querySelector(".btn");
const resultText = document.getElementById("result");

// PLAYER OR COMPUTER
let player = "PLAYER";
let firstLoad = true;
let finished = false;
let grid;

const togglePlayer = () => {
  if (player === "PLAYER") {
    player = "COMPUTER";
  } else {
    player = "PLAYER";
  }
};

const addCellText = (id) => {
  document.getElementById(id).textContent = player === "PLAYER" ? "X" : "O";
};

const clearPrevGame = () => {
  finished = false;
  player = "PLAYER";
  grid = initalGrid();
  cells.forEach((cell) => (cell.textContent = ""));
};

const checkResult = (grid) => {
  const result = checkWinner(grid);
  if (result) {
    if (result === "DRAW") {
      resultText.textContent = "DRAW";
    } else {
      resultText.textContent = result + " WON";
    }
    finished = true;
  }
};

const handleGridClick = (e) => {
  if (finished) {
    return;
  }
  const cellId = +e.target.dataset.id;

  if (!grid[cellId - 1].taken) {
    grid[cellId - 1].taken = player;
    addCellText(cellId);
    togglePlayer();
    checkResult(grid);
    if (!finished) {
      handleComputerResponse();
    }
  }
};

const handleComputerResponse = () => {
  const pickCell = response(grid);
  grid[pickCell - 1].taken = player;

  addCellText(pickCell);
  togglePlayer();
  checkResult(grid);
};

function startGame() {
  clearPrevGame();

  if (firstLoad) {
    gridDom.addEventListener("click", (e) => {
      handleGridClick(e);
    });
    firstLoad = false;
  }
}

btn.addEventListener("click", startGame);
startGame();
