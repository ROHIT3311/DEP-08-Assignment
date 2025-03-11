let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
  setTimeout(() => {
    h1.style.color = color;
    nextColorChange();
  }, delay);
}

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("blue", 1000);
//   });
// });

// function colorChange(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve();
//     }, delay);
//   });
// }

// colorChange("yellow", 1000).then(() => {
//   colorChange("blue", 1000).then(() => {
//     colorChange("wheat", 1000);
//   });
// });

// colorChange("yellow", 1000)
//   .then(() => {
//     return colorChange("blue", 1000);
//   })
//   .then(() => {
//     colorChange("wheat", 1000);
//   });

// async function ChangeColor() {
//   await colorChange("yellow", 1000);
//   await colorChange("blue", 1000);
//   await colorChange("wheat", 1000);
// }
// ChangeColor();

function colorChange(color, delay) {
  return new Promise((resolve, reject) => {
    if (color === "ble") {
      // Example condition for an invalid color
      reject("Error: Invalid color specified!"); // Reject the promise if color is invalid
    }

    setTimeout(() => {
      h1.style.color = color;
      resolve(); // Resolve the promise after successful color change
    }, delay);
  });
}

async function ChangeColor() {
  try {
    await colorChange("yellow", 1000); // This works fine
    await colorChange("blue", 1000); // This works fine
    await colorChange("ble", 1000); // This will reject the promise
    await colorChange("wheat", 1000); // This won't run because of the rejection above
  } catch (error) {
    console.log("Caught Error:", error); // Handle the error
  }
}

ChangeColor();
