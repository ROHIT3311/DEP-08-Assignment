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
