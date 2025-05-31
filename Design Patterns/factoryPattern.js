// Functions Constructors : These implemented when you want to create object implicitly.
// new keyword is used to create an object of the function constructor.
// It will take paramter with the context of "this"

function Developer(name) {
  this.name = name;
  this.type = "Developer";
}
function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function EmployeeFactory(name, type) {
  this.create = (name, type) => {
    switch (type) {
      case 1:
        return new Developer(name);
        break;

      case 2:
        return new Tester(name);
        break;
    }
  };
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Rohit", 1));
employees.push(employeeFactory.create("John", 2));
employees.push(employeeFactory.create("Alex", 2));

console.log(employees);

// Factory functions : These are something which can return the object and create object explicitly.
// No need to use new keyword while creating object
// Use whenever you do not  have  implement the closure
function Car(brand, model) {
  return {
    brand: brand,
    model: model,
    getCar() {
      console.log(`${brand} : ${model}`);
    },
  };
}

let car1 = Car("Toyota", "Supra");
console.log(car1);
car1.getCar();

// This introduced in ES6. This share among all the instances, so it takes less memeory rather
// than function factory
class Bike {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.type = "Bike";
  }

  getBike() {
    console.log(`${this.brand} : ${this.model}`);
  }
}

class Car3 {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.type = "Car";
  }

  getCar() {
    console.log(`${this.brand} : ${this.model}`);
  }
}

class VehicleFactory {
  createVehicle(brand, model, type) {
    switch (type) {
      case 1:
        return new Bike(brand, model);
        break;

      case 2:
        return new Car3(brand, model);
        break;
    }
  }
}

let v1 = new VehicleFactory();
let car = v1.createVehicle("Suzuki", "Fronx", 2);
let bik1 = v1.createVehicle("BMW", "S100RR", 1);
bik1.getBike();
car.getCar();
