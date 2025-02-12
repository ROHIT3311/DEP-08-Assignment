document.cookie = "name=Rohit";
console.log(document.cookie);
document.cookie = "name=Rohitttt";
console.log(document.cookie);

let key = prompt("Enter key");
let value = prompt("Enter value");

document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie);
console.log(
  "Decode Cookie   : ",
  decodeURIComponent(key),
  decodeURIComponent(value)
);
