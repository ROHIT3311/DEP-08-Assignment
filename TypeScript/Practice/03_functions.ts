function getData(str: string): string {
  return `Hello, Data Recevied ${str}`;
}

console.log(getData("Hiee"));

// To make parameter optional just include ? before its type
function add(a: number, b?: number): number {
  return b ? a + b : a;
}

console.log(add(2));
console.log(add(2, 3));

// Default Paramater
function getUserData(name: string = "John", age: number = 20): string {
  return `name : ${name} , age : ${age}`;
}

console.log(getUserData());
console.log(getUserData("Alex", 30));

// Function Overloading
function addNumbersOrStrings(a: number, b: number): number;
function addNumbersOrStrings(a: string, b: string): string;
function addNumbersOrStrings(a: any, b: any): any {
  return a + b;
}

console.log(addNumbersOrStrings(10, 20)); // Output: 30
console.log(addNumbersOrStrings("Hello, ", "World!")); // Output: Hello, World!
