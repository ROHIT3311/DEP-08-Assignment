var Driver = /** @class */ (function () {
    function Driver() {
    }
    Driver.prototype.add = function (a, b) {
        return a + b;
    };
    return Driver;
}());
var d1 = new Driver();
console.log(d1.add(2, 3));
