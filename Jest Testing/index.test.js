const { add } = require("./index");

test("Add ", () => {
  expect(add(2, 3)).toBe(5);
});

test("Multiply 2 numbers : ", () => {
  // Arrange
  const multiply = (a, b) => a * b;

  //   Act
  const result = multiply(2, 3);

  //   Assert
  expect(result).toBe(6);
});

test("True or false", () => {
  // Arrange
  const bool = (a) => a % 2 == 0;

  //   Act
  const result = bool(5);

  //   Assert
  expect(result).toBeFalsy();
});
