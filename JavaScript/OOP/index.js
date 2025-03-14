let obj1 = {
  name: "john",
  age: 20,
  address: {
    city: "nashik",
    state: "MH",
  },
  greet: function () {
    console.log("Hello");
  },
};
console.log(`${obj1.name} and ${obj1.age}`);

let obj2 = new Object();
obj2.name = "Alex";
console.log(obj2.name);

let Person = {
  name: "Doe",
};
let obj3 = Object.create(Person);
console.log(obj3.name);

function getObject(name, age) {
  this.name = name;
  this.age = age;
}
let obj4 = new getObject("Nancy");
console.log(obj4.name);

function getPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}
let obj5 = getPerson("john");
console.log(obj5.name);

let obj6 = Object.assign({}, obj1);
obj6.name = "Rohit";
// obj1.name = "ANYONE";
obj6.address.city = "Pune";
console.log(`Obj1 : ${obj1.name} , Obj6 : ${obj6.name}`);
console.log(`Obj1 : ${obj1.address.city} , Obj6 : ${obj6.address.city}`);

let obj7 = { ...obj1 };
obj7.name = "Bunny";
obj7.address.city = "London";
console.log(obj1.address.city);
obj7.greet = function () {
  console.log("Hiee");
};
obj7.greet();
obj1.greet();
