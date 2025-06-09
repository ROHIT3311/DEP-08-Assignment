interface User {
  name: string;
  age: number;
  great: void;
}

let user1: User = {
  name: "Rohit",
  great: () => console.log("Hi"),
};
console.log(user1);
