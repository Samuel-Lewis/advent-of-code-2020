function look(arr, x, y, dx, dy) {
  let xx = x + dx;
  let yy = y + dy;

  while (true) {
    if (
      xx < 0 ||
      xx >= arr.length ||
      yy < 0 ||
      yy >= arr[xx].length ||
      arr[xx][yy] === "L"
    ) {
      return false;
    }

    if (arr[xx][yy] === "#") {
      return true;
    }

    xx += dx;
    yy += dy;
  }
}

function neighbours(arr, x, y) {
  let c = 0;
  c += look(arr, x, y, -1, -1);
  c += look(arr, x, y, -1, 0);
  c += look(arr, x, y, -1, 1);
  c += look(arr, x, y, 0, -1);
  c += look(arr, x, y, 0, 1);
  c += look(arr, x, y, 1, -1);
  c += look(arr, x, y, 1, 0);
  c += look(arr, x, y, 1, 1);
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
      } else if (v === "#" && n >= 5) {
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
