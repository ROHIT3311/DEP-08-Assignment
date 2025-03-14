// class Student {
//   setAndGetName(name) {
//     this.name = name;
//     alert(`Name of Student : ${name}`);
//   }
//   setandGetMarks(sub1, sub2, sub3) {
//     this.sub1 = sub1;
//     this.sub2 = sub2;
//     this.sub3 = sub3;

//     alert(`${sub1} ${sub2} ${sub3}`);
//   }
// }

// let s1 = new Student();

// s1.setAndGetName("Alex");
// s1.setandGetMarks(91, 92, 93);

function getname(name) {
  this.name = name;
}

let str = new getname("Hello");
console.log(str.name);
