function outer() {
  this.name = "Alice";
  const inner = () => {
    console.log(this.name); // `this` refers to `outer`'s context
  };
  inner();
}

outer(); // Alice ✅ (because arrow functions do not have their own `this`)
