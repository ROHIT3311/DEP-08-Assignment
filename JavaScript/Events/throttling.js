let resizeCount = 0;
const countElement = document.getElementById("resize-count");

function throttle(func, delay) {
  let lastTime = 0;
  return function () {
    const now = new Date().getTime();

    if (now - lastTime >= delay) {
      func();
      lastTime = now;
    }
  };
}

window.addEventListener(
  "resize",
  throttle(() => {
    resizeCount++;
    countElement.textContent = "Resize Count: " + resizeCount;
  }, 2000)
);
