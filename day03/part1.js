const solution = (input) => {
  const grid = input
    .split("\n")
    .filter(String)
    .map((line) => line.split(""));

  const height = grid.length;
  const width = grid[0].length;
  let x = 0,
    y = 0,
    trees = 0;

  while (y < height) {
    if (grid[y][x] === "#") {
      trees++;
    }

    x = (x + 3) % width;
    y += 1;
  }

  return trees;
};

module.exports = solution;
