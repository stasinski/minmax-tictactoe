export const response = (grid) => {
  const filteredGrid = grid.filter((cell) => !cell.taken);

  const pick = Math.ceil(Math.random() * filteredGrid.length);

  return filteredGrid[pick].cell;
};
