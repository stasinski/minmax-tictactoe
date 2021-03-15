const chooseBetterMove = (bestMove, value, id) => {
  if (!bestMove || bestMove.power < value) {
    return {
      power: value,
      id,
    };
  }
  return bestMove;
};

export const response = (grid) => {
  const filteredGrid = grid.filter((cell) => !cell.taken);
  let bestMove;

  // win in one
  for (let i = 0; i < 3; i++) {
    // // row
    if (grid[i * 3].taken && grid[i * 3].taken === grid[i * 3 + 1].taken) {
      const win = grid[i * 3].taken === "COMPUTER";
      bestMove = chooseBetterMove(bestMove, win ? 100 : 80, i * 3 + 2);
    }
    if (grid[i * 3].taken && grid[i * 3].taken === grid[i * 3 + 2].taken) {
      const win = grid[i * 3].taken === "COMPUTER";
      bestMove = chooseBetterMove(bestMove, win ? 100 : 80, i * 3 + 1);
    }
    if (
      grid[i * 3 + 1].taken &&
      grid[i * 3 + 1].taken === grid[i * 3 + 2].taken
    ) {
      const win = grid[i * 3 + 1].taken === "COMPUTER";
      bestMove = chooseBetterMove(bestMove, win ? 100 : 80, i * 3);
    }
    // col
    if (grid[i].taken && grid[i].taken === grid[i + 3].taken) {
      const win = grid[i].taken === "COMPUTER";
      bestMove = chooseBetterMove(bestMove, win ? 100 : 80, i + 6);
    }
    if (grid[i].taken && grid[i].taken === grid[i + 6].taken) {
      const win = grid[i].taken === "COMPUTER";
      bestMove = chooseBetterMove(bestMove, win ? 100 : 80, i + 3);
    }
    if (grid[i + 3].taken && grid[i + 3].taken === grid[i + 6].taken) {
      const win = grid[i + 3].taken === "COMPUTER";
      bestMove = chooseBetterMove(bestMove, win ? 100 : 80, i);
    }
  }
  if (grid[0].taken && grid[0].taken === grid[4].taken) {
    const win = grid[0].taken === "COMPUTER";
    bestMove = chooseBetterMove(bestMove, win ? 100 : 80, 8);
  }
  if (grid[0].taken && grid[0].taken === grid[8].taken) {
    const win = grid[0].taken === "COMPUTER";
    bestMove = chooseBetterMove(bestMove, win ? 100 : 80, 4);
  }
  if (grid[4].taken && grid[4].taken === grid[8].taken) {
    const win = grid[4].taken === "COMPUTER";
    bestMove = chooseBetterMove(bestMove, win ? 100 : 80, 0);
  }
  if (grid[2].taken && grid[2].taken === grid[4].taken) {
    const win = grid[2].taken === "COMPUTER";
    bestMove = chooseBetterMove(bestMove, win ? 100 : 80, 6);
  }
  if (grid[2].taken && grid[2].taken === grid[6].taken) {
    const win = grid[2].taken === "COMPUTER";
    bestMove = chooseBetterMove(bestMove, win ? 100 : 80, 4);
  }
  if (grid[4].taken && grid[4].taken === grid[6].taken) {
    const win = grid[4].taken === "COMPUTER";
    bestMove = chooseBetterMove(bestMove, win ? 100 : 80, 2);
  }

  for (let move of filteredGrid) {
    if (move.cell === 5) {
      bestMove = chooseBetterMove(bestMove, 10, move.cell - 1);
    }
  }

  console.log(bestMove);

  if (!bestMove) {
    const randomPick = Math.ceil(Math.random() * filteredGrid.length);
    console.log(randomPick);
    return filteredGrid[randomPick - 1].cell;
  } else {
    return grid[bestMove.id].cell;
  }
};
