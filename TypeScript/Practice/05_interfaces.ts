interface Person {
  name: string;
  age: number;
  add(a: number, b: number): number;
}

class Driver implements Person {
  name: string;
  age: number;

  add(a: number, b: number): number {
    return a + b;
  }
}

let d1 = new Driver();
console.log(d1.add(2, 3));

export {};
