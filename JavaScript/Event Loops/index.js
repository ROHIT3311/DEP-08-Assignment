console.log("Start");

setTimeout(() => {
  console.log("In Set Timeout");
}, 2000);

function getdata() {
  return new Promise((resolve, reject) => {
    console.log("In Promise");
  });
}

getdata();

console.log("End");

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
