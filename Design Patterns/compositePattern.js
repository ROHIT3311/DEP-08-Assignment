class Component {
  constructor(name) {
    this.name = name;
  }
  show() {
    console.log(this.name);
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    this.children = this.children.filter((child) => child !== component);
  }

  show() {
    console.log(`Composite: ${this.name}`);
    this.children.forEach((child) => child.show());
  }
}

// Usage
const file1 = new Component("File 1");
const file2 = new Component("File 2");
const folder = new Composite("Folder");

folder.add(file1);
folder.add(file2);

const root = new Composite("Root");
root.add(folder);
folder.remove(file1);

root.show();
