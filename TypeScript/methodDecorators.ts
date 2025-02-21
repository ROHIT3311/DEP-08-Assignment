function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log(`Method Decorated: ${propertyKey}`);
  return descriptor;
}

class Person {
  @Log
  greet() {
    console.log("Hello");
  }
}

const p = new Person();
p.greet();
