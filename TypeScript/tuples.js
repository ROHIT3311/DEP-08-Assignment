"use strict";
// Whenever we declare or initialized an array with multiple data types as we using union, then tuples states that order should be followed,
// You have to initialized the value for, which you have defined types,
Object.defineProperty(exports, "__esModule", { value: true });
var MyUser2;
MyUser2 = [1, "two", true]; //No Error
MyUser2 = ["hello", 2, true]; //Error
