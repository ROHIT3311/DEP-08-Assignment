document.querySelector(".parent").addEventListener(
  "click",
  () => {
    console.log("Parent");
  },
  true
);
document.querySelector(".child").addEventListener(
  "click",
  () => {
    console.log("child");
  },
  true
);
