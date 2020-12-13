const bn = require('bignum')

function mod(n, m) {
  return ((n % m) + m) % m;
}

const crt = (n, a) => {
  const prod = n.reduce((a,b) => a.mul(b));
  let sum = bn(0);

  for (let i = 0; i < n.length; i++) {
    const p = prod.div(n[i]);
    const mi = a[i].mul(mulInv(p, n[i])).mul(p);
    sum = sum.add(mi);
  }

  return sum.mod(prod);
};

const mulInv = (a, b) => {
  let b0 = b;
  let x0 = bn(0);
  let x1 = bn(1);

  if (b.eq(1)) {
    return bn(1);
  }

  while (a.gt(1)) {
    const q = a.div(b);
    const amb = a.mod(b);
    a = b;
    b = amb;

    let xqx = x1.sub(q.mul(x0));
    x1 = x0;
    x0 = xqx;
  }

  if (x1.lt(0)) {
    x1 = x1.add(b0);
  }

  return x1;
};

const solution = (input) => {
  const [_, timetableStr] = input.split("\n");
  const busTimes = timetableStr.split(",");

  let n = [];
  let a = [];

  busTimes.forEach((bus, index) => {
    if (bus === "x") {
      return;
    }

    const b = Number(bus);
    n.push(bn(b));
    a.push(bn(mod(-index, b)));
  });

  return crt(n, a).toNumber();
};

module.exports = solution;
