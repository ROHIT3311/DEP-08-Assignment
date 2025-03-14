let obj = {
  name: "John",
  age: 20,
  addrees: {
    city: "Pune",
    state: "MH",
  },
  greet: function () {
    console.log("hello");
  },
};

// let deepObj = JSON.parse(JSON.stringify(obj));
// // deepObj.greet();
// // deepObj.age = 30;
// // console.log(deepObj.age);
// // console.log(obj.age);
// deepObj.addrees.city = "Nashik";
// console.log(`Obj : ${obj.addrees.city} and DeepObj : ${deepObj.addrees.city}`);

let deepObj = structuredClone(obj);
deepObj.greet();
