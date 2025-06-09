type Employee = {
  name: string;
  age: number;
  dept: string;
};

type Student = {
  name: string;
  age: number;
  clg: string;
};

type User = Employee | Student;

let user1: User = {
  name: "John",
  age: 22,
  clg: "MIT",
};

type User2 = Employee & Student;

let user2: User2 = {
  name: "John",
  age: 22,
  dept: "DEV",
  clg: "MIT",
};

