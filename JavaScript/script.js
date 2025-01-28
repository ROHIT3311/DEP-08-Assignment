// let arr = [1, 2, 3, 4];
// for (a in arr) {
//   console.log(a);
// }

// const person = { name: "John", age: 30, city: "New York" };
// for (const key in person) {
//   console.log(`${key}: ${person[key]}`);

// }

// let todo = [];
// let req = prompt("Enter Task");
// while (true) {
//   if (req === "quit") {
//     console.log("Quit");
//     break;
//   }

//   if (req === "add") {
//     let to = prompt("Enter To do");
//     todo.push(to);
//   } else if (req === "delete") {
//     let idx = prompt("Enter index to delete to do");
//     todo.splice(idx, 1);
//   } else if (req === "list") {
//     for (ele of todo) {
//       console.log(ele);
//     }
//   }
//    req = prompt("Enter Task");
// }

let str = "     Hello       ";
console.log("trim : " + str.trim());
str = "Hello";
console.log("Slice : " + str.slice(2));
str = "Hello";
console.log("Replace : " + str.replace("e", "o"));
