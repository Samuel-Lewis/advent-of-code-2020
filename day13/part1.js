const solution = (input) => {
  const [leaveStr, timetableStr] = input.split("\n");

  const leaveTime = Number(leaveStr);
  const busTimes = timetableStr
    .split(",")
    .filter((r) => r !== "x")
    .map(Number);

  let earliestTime = 9999999999999999;
  let bestId = 0;
  let bestWait = 0;

  busTimes.forEach((id) => {
    const busRound = Math.ceil(leaveTime / id);
    const arrivalTime = busRound * id;

    if (arrivalTime < earliestTime) {
      earliestTime = arrivalTime;
      bestId = id;
      bestWait = arrivalTime - leaveTime;
    }
  });

  return bestId * bestWait;
};

module.exports = solution;
