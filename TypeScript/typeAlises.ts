// Type alises is nothing but to store a data type in our known variable. We can also store a object definition where we can used it multiple time as show below how we can used ir.
// We always have to use it with keyword type as shown below

type User = {
  readonly _id: number[];
  name: string;
};

let MyUser: User = {
  _id: [1, 2, 3],
  name: "john",
};
