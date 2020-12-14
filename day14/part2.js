const dec2bin = (dec) => {
  return (dec >>> 0).toString(2).padStart(36, "0");
};

const getPerms = (address) => {
  const completeAddrs = [];

  const explode = (addr, index) => {
    if (index === addr.length) {
      completeAddrs.push(addr.join(""));
      return;
    }

    if (addr[index] === "X") {
      addr[index] = "0";
      explode(addr, index + 1);

      addr[index] = "1";
      explode(addr, index + 1);
    } else {
      explode(addr, index + 1);
    }
  };

  explode(address, 0);
  return completeAddrs;
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
      const value = Number(v);

      let targetAddr = dec2bin(Number(i)).split("");
      mask.forEach((code, index) => {
        if (code === "0") {
          return;
        }

        targetAddr[index] = code;
      });

      const addrs = getPerms(targetAddr).map((a) => parseInt(a, 2));
      addrs.forEach((ad) => {
        mem[ad] = value;
      });
    });
  });

  return mem.reduce((a, b) => a + b, 0);
};

module.exports = solution;
