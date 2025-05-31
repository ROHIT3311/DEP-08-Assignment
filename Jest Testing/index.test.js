const { add, getUser } = require("./index.js");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(5);
});

test("add 2+5 to equal 7", () => {
  expect(add(2, 5)).toBe(7);
});

// Mocking the getUser function
const mockGetUser = jest.fn(() => ({ name: "Bob", age: 30 }));

test("mocked getUser function", () => {
  expect(mockGetUser()).toEqual({ name: "Bob", age: 30 });
  expect(mockGetUser).toHaveBeenCalledTimes(1);
});
