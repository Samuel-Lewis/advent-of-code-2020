function neighbours(arr, x, y) {
  let c = 0;

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (i === x && j === y) {
        continue;
      }

      if (i < 0 || j < 0 || i >= arr.length || j >= arr[i].length) {
        continue;
      }

      c += arr[i][j] === "#";
    }
  }
  return c;
}

function simul(arrangement) {
  const newArrangement = arrangement.map((arr) => arr.slice());
  let changes = 0;

  for (let i = 0; i < arrangement.length; i++) {
    for (let j = 0; j < arrangement[i].length; j++) {
      const v = arrangement[i][j];
      const n = neighbours(arrangement, i, j);

      if (v === "L" && n === 0) {
        newArrangement[i][j] = "#";
        changes++;
      } else if (v === "#" && n >= 4) {
        newArrangement[i][j] = "L";
        changes++;
      }
    }
  }
  return { newArrangement, changes };
}

const solution = (input) => {
  const seats = input
    .split("\n")
    .filter(String)
    .map((r) => r.split(""));

  let mut = seats;
  while (true) {
    const { newArrangement, changes } = simul(mut);
    mut = newArrangement;
    if (changes === 0) {
      break;
    }
  }

  let c = 0;
  for (let i = 0; i < mut.length; i++) {
    for (let j = 0; j < mut[i].length; j++) {
      if (mut[i][j] === "#") c++;
    }
  }

  return c;
};

module.exports = solution;
