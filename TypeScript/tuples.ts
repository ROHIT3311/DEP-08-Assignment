// Whenever we declare or initialized an array with multiple data types as we using union, then tuples states that order should be followed,
// You have to initialized the value for, which you have defined types,

let MyUser2: [number, string, boolean];

MyUser2 = [1, "two", true]; //No Error

MyUser2 = ["hello", 2, true]; //Error

let rgb: [number, number, number];

rgb = [255, 255, 255]; //Use Case of RGB color which we used mostly

export {};
