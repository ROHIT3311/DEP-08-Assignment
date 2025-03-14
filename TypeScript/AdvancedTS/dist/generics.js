"use strict";
// Generics in TypeScript allow you to create reusable and flexible components that can work with multiple data types while maintaining type safety.
// A generic type is defined using angle brackets <T>, where T is a placeholder for the actual type.
// Generics make your functions, classes, and interfaces more reusable and type-safe.
// Type inference helps avoid manually specifying types.
// Constraints ensure generics work with specific types.
// Multiple type parameters allow more flexibility
// Developer can defined generic like <T,> because <T> means in react or html it can also called as tag,
// So we can just add one comma, no error because of comma always remember
function getSearchProducts(products) {
    return products[3];
}
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
// We can have more than on generic, How? lets see
function getProducts(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo,
    };
}
// We can also extends any data type in our generic
function getProducts2(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo,
    };
}
function getProducts3(valueOne, valueTwo) {
    return {
        valueOne,
        valueTwo,
    };
}
getProducts3(2, { connection: "http", username: "john", password: "hello" });
