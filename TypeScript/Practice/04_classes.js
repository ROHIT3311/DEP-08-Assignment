var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, age, designation) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }
    Employee.prototype.getEmployeeData = function () {
        return "name : ".concat(this.name, ", age : ").concat(this.age);
    };
    Employee.prototype.getDesignation = function () {
        return "".concat(this.name, " is ").concat(this.designation);
    };
    return Employee;
}());
var Salary = /** @class */ (function (_super) {
    __extends(Salary, _super);
    function Salary(salary, name, age, designation) {
        var _this = _super.call(this, name, age, designation) || this;
        _this.salary = salary;
        return _this;
    }
    Salary.prototype.getSalary = function () {
        return "salary of ".concat(this.name, " : ").concat(this.salary, " ");
    };
    return Salary;
}(Employee));
// const e1 = new Employee("John", 20);
// console.log(e1.getEmployeeData());
// console.log(e1.name); // When i make name as private then its not accessible, else it is accessible
var e1 = new Salary(20000, "John", 30, "Developer");
console.log(e1.getEmployeeData());
console.log(e1.getDesignation());
console.log(e1.getSalary());
