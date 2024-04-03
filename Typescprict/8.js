var Labrador = /** @class */ (function () {
    function Labrador(name) {
        this.name = name;
    }
    Labrador.prototype.eat = function () {
        console.log("".concat(this.name, " is eating"));
    };
    Labrador.prototype.bark = function () {
        console.log("Dog is barking");
    };
    Labrador.prototype.makeSound = function () {
        this.bark();
    };
    return Labrador;
}());
var Dog = new Labrador("Tommy");
Dog.eat();
Dog.bark();
Dog.makeSound();
