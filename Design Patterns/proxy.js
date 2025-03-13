let o1 = {
  a: 10,
  b: 20,
  c: 30,
};

let p1 = new Proxy(o1, {
  get: function () {
    if (o1.c == 30) {
      throw Error;
    }
  },
});

p1.c;
