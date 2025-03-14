type Person = {
  name: string;
  age: number;
};

type Employee = {
  role: string;
  department: string;
};

type EmployeeDetails = Person & Employee; // Combines Person and Employee

const employee: EmployeeDetails = {
  name: "John", // Person
  age: 30, // Person
  role: "Developer", // Employee
  department: "IT", // Employee
};

console.log(employee);
