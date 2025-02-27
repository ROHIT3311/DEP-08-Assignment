// Constructor function
function Car(make, model) {
  this.make = make; // Instance property
  this.model = model; // Instance property

  // Instance method
  this.drive = function () {
    console.log(`Driving a ${this.make} ${this.model}`);
  };
}

// Creating instances
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Accord");

// Using the instance methods
car1.drive(); // Output: Driving a Toyota Camry
car2.drive(); // Output: Driving a Honda Accord

// ES6
class Car2 {
  constructor(make, model) {
    this.make = make; // Instance property
    this.model = model; // Instance property
  }

  drive() {
    // Instance method
    console.log(`Driving a ${this.make} ${this.model}`);
  }
}

// Creating instances
const car12 = new Car2("Toyota", "Camry");
const car22 = new Car2("Honda", "Accord");

// Using the instance methods
car1.drive(); // Output: Driving a Toyota Camry
car2.drive(); // Output: Driving a Honda Accord
