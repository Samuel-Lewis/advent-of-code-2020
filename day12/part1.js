const move = ({ x, y }, dx, dy) => {
  return { x: x + dx, y: y + dy };
};

const getFDir = (deg) => {
  switch (deg) {
    case 0:
      return { dx: 0, dy: -1 };
    case 90:
      return { dx: 1, dy: 0 };
    case 180:
      return { dx: 0, dy: 1 };
    case 270:
      return { dx: -1, dy: 0 };
    default:
      throw new Error("bad deg: " + deg);
  }
};

const solution = (input) => {
  const moves = input
    .split("\n")
    .filter(String)
    .map((r) => {
      return { dir: r[0], mag: Number(r.slice(1)) };
    });

  let pos = { x: 0, y: 0 };
  let face = 90;

  moves.forEach(({ dir, mag }) => {
    switch (dir) {
      case "N":
        pos = move(pos, 0, -mag);
        break;
      case "S":
        pos = move(pos, 0, mag);
        break;
      case "E":
        pos = move(pos, mag, 0);
        break;
      case "W":
        pos = move(pos, -mag, 0);
        break;

      case "F":
        const fdir = getFDir(face);
        pos = move(pos, mag * fdir.dx, mag * fdir.dy);
        break;

      case "L":
        face = (face - mag + 360) % 360;
        break;

      case "R":
        face = (face + mag) % 360;
        break;
    }
  });

  return Math.abs(pos.x) + Math.abs(pos.y);
};

module.exports = solution;
