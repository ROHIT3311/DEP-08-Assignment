// // const progress = document.querySelector(".progress");
// // const input = document.querySelector(".input");
// // const maxInput = document.querySelector(".maxInput");

// // let finalValue = 0;
// // let max = 0;

// // input.addEventListener("keyup", function () {
// //   finalValue = parseInt(input.value, 10);
// //   changeWidth();
// // });

// // maxInput.addEventListener("keyup", function () {
// //   max = parseInt(maxInput.value, 10);
// //   changeWidth();
// // });

// // function changeWidth() {
// //   progress.style.width = `${(finalValue / max) * 100} `;
// //   progress.innerText = `${Math.ceil((finalValue / max) * 100)}% `;
// // }

// const progressDone = document.querySelector(".progress-done");
// const input = document.querySelector(".input");
// const maxInput = document.querySelector(".maxInput");

// let finalValue = 0;
// let max = 100; // Default max value to prevent division by zero

// input.addEventListener("keyup", function () {
//   finalValue = parseInt(input.value, 10) || 0;
//   changeWidth();
// });

// maxInput.addEventListener("keyup", function () {
//   max = parseInt(maxInput.value, 10) || 100; // Avoid division by zero
//   changeWidth();
// });

// function changeWidth() {
//   let percentage = (finalValue / max) * 100;
//   if (percentage > 100) percentage = 100; // Cap at 100%
//   if (percentage < 0) percentage = 0; // Prevent negative width

//   progressDone.style.width = `${percentage}%`;
//   progressDone.innerText = `${Math.ceil(percentage)}%`;
// }

const progressDone = document.querySelector(".progress-done");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("reset");

let progress = 0;
let interval;

startBtn.addEventListener("click", function () {
  if (interval) return; // Prevent multiple intervals

  interval = setInterval(() => {
    if (progress >= 100) {
      clearInterval(interval);
      interval = null;
    } else {
      progress += 1; // Increase progress
      updateProgress();
    }
  }, 50); // Adjust speed (lower = faster)
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = null;
});

function updateProgress() {
  progressDone.style.width = `${progress}%`;
  progressDone.innerText = `${progress}%`;
}

resetBtn.addEventListener("click", () => {
  reset();
});

function reset() {
  progress = 0;
  progressDone.style.width = 0;
  progressDone.innerText = 0;
  clearInterval(interval);
  interval = null;
}
