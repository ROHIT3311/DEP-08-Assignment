let input = document.querySelector("input");

function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

input.addEventListener(
  "input",
  debounce(() => {
    console.log("Fetching Data");
  }, 2000)
);
