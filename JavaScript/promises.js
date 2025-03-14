// function saveToDB(data) {
//   return new Promise((success, faliure) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       success("Success");
//     } else {
//       faliure("Failure");
//     }
//   });
// }

// saveToDB("hello")
//   .then((result) => {
//     console.log("data 1");
//     console.log(result);
//     return saveToDB("world");
//   })
//   .then((result) => {
//     console.log("data 2");
//     console.log(result);
//   })
//   .catch((result) => {
//     console.log("Rejected");
//     console.log(result);
//   });

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve();
    }, delay);
  });
}

async function change() {
  await changeColor("red", 1000);
  await changeColor("blue", 1000);
  changeColor("pink", 1000);
}

change();
