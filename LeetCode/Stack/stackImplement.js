class StackImplement {
  constructor() {
    this.arr = [];
  }
  push(ele) {
    this.arr.push(ele);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }

    return this.arr.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is Empty";
    }

    return this.arr[this.arr.length - 1];
  }
  isEmpty() {
    return this.arr.length == 0;
  }
  size() {
    return this.arr.length;
  }
  print() {
    console.log(this.arr);
  }
}

let stack = new StackImplement();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push("Hello");
stack.push(5);
stack.print();
console.log(stack.peek());
stack.pop();
stack.print();
console.log(stack.peek());
