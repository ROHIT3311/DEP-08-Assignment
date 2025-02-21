"use strict";
// In Abstract classes we have to just declare the methods and variables, All the implementations will be
// in extended class of it, but abstract classes can have its own methods having implemetations as well
// Now you will see, whats the difference between abstract classes and interfaces
// 1) Abstract classes can have constructor, Interfaces cant
// 2) Abstract classes can have its own methods with implemetations, Interfaces cant
// 3) Abstract classes can extended by one class only, Interfaces can be implemented via mutliple classes
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, angle) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.angle = angle;
    }
    getSepia() {
        console.log("Sepia");
    }
}
