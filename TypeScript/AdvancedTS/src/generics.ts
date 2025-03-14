// Generics in TypeScript allow you to create reusable and flexible components that can work 
// with multiple data types while maintaining type safety.
// A generic type is defined using angle brackets <T>, where T is a placeholder for the actual type.
// Generics make your functions, classes, and interfaces more reusable and type-safe.
// Type inference helps avoid manually specifying types.
// Constraints ensure generics work with specific types.
// Multiple type parameters allow more flexibility

// Developer can defined generic like <T,> because <T> means in react or html it can also called as tag,
// So we can just add one comma, no error because of comma always remember

function getSearchProducts<T>(products: T[]): T {
  return products[3];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};

// We can have more than on generic, How? lets see
function getProducts<T, U>(valueOne: T, valueTwo: U): object {
  return {
    valueOne,
    valueTwo,
  };
}

// We can also extends any data type in our generic
function getProducts2<T, U extends number>(valueOne: T, valueTwo: U): object {
  return {
    valueOne,
    valueTwo,
  };
}

// getProducts2(3, "2"); //Error
// getProducts2(3, 2); // No Error

// We can extend our own interface in generics
interface Database {
  connection: string;
  username: string;
  password: string;
}
function getProducts3<T, U extends Database>(valueOne: T, valueTwo: U): object {
  return {
    valueOne,
    valueTwo,
  };
}

getProducts3(2, { connection: "http", username: "john", password: "hello" });
