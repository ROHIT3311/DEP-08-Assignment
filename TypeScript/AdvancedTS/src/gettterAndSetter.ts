// If you see in getters and setter,
// Getter can have return type to their function but Setter doesn't, Remeber this for interview

class Animal {
  constructor(public animalName: string) {
    this.animalName = animalName;
  }

  get getAnimalData(): string {
    return this.animalName;
  }

  set countTotalAnimal(totalAnimal: number) {
    console.log("animal Count is : ", totalAnimal);
  }
}

let a1 = new Animal("Dog");
console.log(a1.getAnimalData);
a1.countTotalAnimal = 20;
