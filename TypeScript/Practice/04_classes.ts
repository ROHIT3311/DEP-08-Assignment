class Employee {
  name: string;
  age: number;
  readonly designation: string;
  constructor(name: string, age: number, designation: string) {
    this.name = name;
    this.age = age;
    this.designation = designation;
  }

  getEmployeeData(): string {
    return `name : ${this.name}, age : ${this.age}`;
  }
  getDesignation(): string {
    return `${this.name} is ${this.designation}`;
  }
}

class Salary extends Employee {
  salary: number;
  constructor(salary: number, name: string, age: number, designation: string) {
    super(name, age, designation);
    this.salary = salary;
  }

  getSalary(): string {
    return `salary of ${this.name} : ${this.salary} `;
  }
}

// const e1 = new Employee("John", 20);
// console.log(e1.getEmployeeData());
// console.log(e1.name); // When i make name as private then its not accessible, else it is accessible

const e1 = new Salary(20000, "John", 30, "Developer");
console.log(e1.getEmployeeData());
console.log(e1.getDesignation());
// e1.designation = "Tester"; //Can not update because it only read only
console.log(e1.getDesignation());

console.log(e1.getSalary());
