const move = ({ x, y }, dx, dy) => {
  return { x: x + dx, y: y + dy };
};

const rotate = (pos, deg) => {
  // p'x = cos(theta) * (px-ox) - sin(theta) * (py-oy) + ox
  // p'y = sin(theta) * (px-ox) + cos(theta) * (py-oy) + oy

  const theta = (deg * Math.PI) / 180;
  const x = Math.round(pos.x * Math.cos(theta) - pos.y * Math.sin(theta));
  const y = Math.round(pos.x * Math.sin(theta) + pos.y * Math.cos(theta));

  return { x, y };
};

const solution = (input) => {
  const moves = input
    .split("\n")
    .filter(String)
    .map((r) => {
      return { dir: r[0], mag: Number(r.slice(1)) };
    });

  let shipPos = { x: 0, y: 0 };
  let waypoint = { x: 10, y: -1 };

  moves.forEach(({ dir, mag }) => {
    switch (dir) {
      case "N":
        waypoint = move(waypoint, 0, -mag);
        break;
      case "S":
        waypoint = move(waypoint, 0, mag);
        break;
      case "E":
        waypoint = move(waypoint, mag, 0);
        break;
      case "W":
        waypoint = move(waypoint, -mag, 0);
        break;

      case "F":
        shipPos = move(shipPos, mag * waypoint.x, mag * waypoint.y);
        break;

      case "L":
        waypoint = rotate(waypoint, -mag);
        break;

      case "R":
        waypoint = rotate(waypoint, mag);
        break;
    }
  });

  return Math.abs(shipPos.x) + Math.abs(shipPos.y);
};

module.exports = solution;
