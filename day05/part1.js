const search = (sequence, min, max) => {
  // true => take low

  const front = sequence.shift();
  if (sequence.length === 0) {
    return front ? min : max;
  }

  const mid = Math.floor((min + max) / 2);
  if (front) {
    return search(sequence, min, mid);
  } else {
    return search(sequence, mid + 1, max);
  }
};

const solution = (input) => {
  const ids = input
    .split("\n")
    .filter(String)
    .map((r) => {
      const seat = r.split("");
      // FBFBBFFRLR
      const rowSeq = seat.slice(0, 7).map((s) => s === "F");
      const colSeq = seat.slice(7).map((s) => s === "L");

      const row = search(rowSeq, 0, 127);
      const col = search(colSeq, 0, 7);
      return row * 8 + col;
    });

  return Math.max(...ids);
};

module.exports = solution;
