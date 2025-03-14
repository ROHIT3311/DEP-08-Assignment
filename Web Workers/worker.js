self.onmessage = function (event) {
  let number = event.data;

  let sum = 0;

  for (let i = 0; i < number; i++) {
    sum += i;
  }

  postMessage(sum);
};
