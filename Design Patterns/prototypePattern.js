const Car = {
  drive: function () {
    console.log(`drive a car`);
  },

  getCar: function () {
    console.log(`${this.brand} : ${this.model}`);
  },
};

function createCar(brand, model) {
  const newCar = Object.create(Car);
  newCar.brand = brand;
  newCar.model = model;
  return newCar;
}

let car1 = createCar("Suzuki", "Fronx");
car1.getCar();
