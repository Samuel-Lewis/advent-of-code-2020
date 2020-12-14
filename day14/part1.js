const dec2bin = (dec) => {
  return (dec >>> 0).toString(2).padStart(36, "0");
};

const solution = (input) => {
  const programs = input
    .split("mask = ")
    .filter(String)
    .map((line) => line.split("\n").filter(String));

  let mem = [];

  const re = /mem\[(\d+)\] = (\d+)/;

  programs.forEach((prog) => {
    const [m, ...insts] = prog;
    const mask = m.split("");

    insts.forEach((inst) => {
      const [_, i, v] = inst.match(re);
      const index = Number(i);
      const binValue = dec2bin(Number(v)).split("");

      mask.forEach((v, i) => {
        if (v === "X") {
          return;
        }
        binValue[i] = v;
      });

      mem[index] = parseInt(binValue.join(""), 2);
    });
  });

  return mem.reduce((a, b) => a + b, 0);
};

module.exports = solution;
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
// 000000000000000000000000000001000000
