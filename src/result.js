export const result = (grid) => {
  for (let i = 0; i < 3; i++) {
    if (
      grid[i * 3].taken &&
      grid[i * 3].taken === grid[i * 3 + 1].taken &&
      grid[i * 3].taken === grid[i * 3 + 2].taken
    ) {
      return grid[i].taken;
    }
    if (
      grid[i].taken &&
      grid[i].taken === grid[i + 3].taken &&
      grid[i].taken === grid[i + 6].taken
    ) {
      return grid[i].taken;
    }
  }
  if (
    grid[0].taken &&
    grid[0].taken === grid[4].taken &&
    grid[0].taken === grid[8].taken
  ) {
    return grid[0].taken;
  }
  if (
    grid[2].taken &&
    grid[2].taken === grid[4].taken &&
    grid[2].taken === grid[6].taken
  ) {
    return grid[2].taken;
  }
  if (grid.every((p) => p.taken)) {
    return "DRAW";
  }
  return null;
};
