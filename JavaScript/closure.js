function show() {
  let counter = 0;
  return function () {
    setInterval(() => {
      counter++;
      console.log(counter);
    }, 1000);
  };
}
let x = show();
x();
