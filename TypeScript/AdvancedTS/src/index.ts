class User {
  email: string;
  name: string;

  //   Private can be accessible in their own class only
  //   private PRN: number;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

// let u1 = new User("rohit@gmail.com", "rohit");

// function factorial(n: number): number {
//   if (n == 0 || n == 1) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

// console.log(factorial(10));

// abstract class Shape {
//   abstract getArea(): number;
//   abstract getPerimeter(): number;
// }

// class Rectangle extends Shape {
//   constructor(private width: number, private height: number) {
//     super();
//   }

//   getArea(): number {
//     return this.width * this.height;
//   }

//   getPerimeter(): number {
//     return 2 * (this.width + this.height);
//   }
// }

// class Circle extends Shape {
//   constructor(private radius: number) {
//     super();
//   }

//   getArea(): number {
//     return Math.PI * this.radius * this.radius;
//   }

//   getPerimeter(): number {
//     return 2 * Math.PI * this.radius;
//   }
// }

// const rect = new Rectangle(10, 5);
// console.log("Rectangle Area:", rect.getArea());
// console.log("Rectangle Perimeter:", rect.getPerimeter());

// const circle = new Circle(7);
// console.log("Circle Area:", circle.getArea());
// console.log("Circle Perimeter:", circle.getPerimeter());

function findMaxinArray(arr: number[]): number {
  let max: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMaxinArray([1, 2, 3, 4, 5]));
