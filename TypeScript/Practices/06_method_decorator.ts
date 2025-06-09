function LogCall(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Called ${propertyKey}`);
    return original.apply(this, args);
  };
}

class Greet {
  @LogCall
  hello() {
    console.log("Hello world!");
  }
}

const g = new Greet();
g.hello(); // Output:
// Called hello
// Hello world!
