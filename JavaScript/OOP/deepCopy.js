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

let shallowcpy = Object.assign({}, obj);
console.log(shallowcpy);
shallowcpy.addrees.city = "Nashik";
shallowcpy.name = "Rohit";
console.log(obj.addrees.city);
console.log(shallowcpy.addrees.city);
console.log(shallowcpy.name);
console.log(obj.name);
shallowcpy.greet();

// let deepObj = JSON.parse(JSON.stringify(obj));
// // deepObj.greet();
// // deepObj.age = 30;
// // console.log(deepObj.age);
// // console.log(obj.age);
// deepObj.addrees.city = "Nashik";
// console.log(`Obj : ${obj.addrees.city} and DeepObj : ${deepObj.addrees.city}`);

// let deepObj = structuredClone(obj);
// deepObj.greet();
