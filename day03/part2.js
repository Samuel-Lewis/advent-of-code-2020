const solution = (input) => {
  const grid = input
    .split("\n")
    .filter(String)
    .map((line) => line.split(""));

  return [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ]
    .map((offset) => slope(grid, offset[0], offset[1]))
    .reduce((a, b) => a * b, 1);
};

const slope = (grid, right, down) => {
  const height = grid.length;
  const width = grid[0].length;
  let x = 0,
    y = 0,
    trees = 0;

  while (y < height) {
    if (grid[y][x] === "#") {
      trees++;
    }

    x = (x + right) % width;
    y += down;
  }

  return trees;
};

module.exports = solution;
