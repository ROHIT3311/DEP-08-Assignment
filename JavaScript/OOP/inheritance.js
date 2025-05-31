// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;
// // }

// // Person.prototype.greet = function () {
// //   console.log("Hello");
// // };

// // let obj1 = new Person("John", 20);
// // obj1.greet();
// // console.log(obj1);

// // // let obj2 = Object.create(Person);
// // // obj2.wolrd = function name() {
// // //   console.log("World");
// // // };
// // // Person.wolrd();
// // // obj2.wolrd();

// // const person2 = {
// //   greet() {
// //     console.log("Hello from Person");
// //   },
// // };
// // const student = Object.create(person2);
// // student.study = function () {
// //   console.log("Studying...");
// // };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getData() {
//     console.log(`Name : ${this.name} and Age : ${this.age}`);
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade) {
//     super(name, age); // Calls the parent constructor
//     this.grade = grade;
//   }
//   Study() {
//     console.log(`${this.name} is studying. Grade : ${this.grade}`);
//   }
// }

// let s1 = new Student("John", 25, "A");
// s1.getData();
// s1.Study();

function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.showUser = function () {
  console.log("In User");
};

function Employee(dept) {
  User.call(this, "John", 20);
  this.dept = dept;
  this.show = function () {
    console.log(
      `In Employee : name : ${this.name} : age : ${this.age} : dept : ${this.dept}`
    );
  };
}

Employee.prototype = Object.create(User.prototype);
// Employee.prototype.constructor = User;
let e1 = new Employee("CS");
e1.show();
e1.showUser();
let u1 = new User("Alex", 23);
console.log(e1 instanceof User);
console.log(u1 instanceof User);
