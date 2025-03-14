// If we use readonly to any variable, after initializing 1st time, we cannot change its data.

type User = {
  readonly _id: number[];
  name: string;
};

let MyUser: User = {
  _id: [1, 2, 3],
  name: "john",
};
