function getData(str) {
    return "Hello, Data Recevied ".concat(str);
}
console.log(getData("Hiee"));
// To make parameter optional just include ? before its type
function add(a, b) {
    return b ? a + b : a;
}
console.log(add(2));
console.log(add(2, 3));
// Default Paramater
function getUserData(name, age) {
    if (name === void 0) { name = "John"; }
    if (age === void 0) { age = 20; }
    return "name : ".concat(name, " , age : ").concat(age);
}
console.log(getUserData());
console.log(getUserData("Alex", 30));
