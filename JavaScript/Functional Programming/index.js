// Pure Functions
function add2(x) {
  return x + 2;
}
console.log(add2(3));

// Impure Functions
let sum = 0;
function calculateSum(x) {
  sum += x;
  return sum;
}
console.log(calculateSum(2));
console.log(calculateSum(3));

// First-class functions
const multiplyBy2 = function (x) {
  return x * 3;
};
console.log(multiplyBy2(3));

// Higher Order Functions
function addTotal(num, addBy3) {
  return addBy3(num);
}

console.log(
  addTotal(2, (x) => {
    return x + 3;
  })
);

// Function Composition
const addBy2 = (num) => num + 2;

const addBy3 = (num) => num + 3;

const addTotal2 = () => {
  return addBy2(addBy3(2));
};

console.log(addTotal2());

// Currying
const multiply = (x) => (y) => x * y;
console.log(multiply(2)(3));
