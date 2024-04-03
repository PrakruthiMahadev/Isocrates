//interfaces
interface Animal{
name: string;
eat(): void;
}
interface Dog extends Animal{
    bark():void;

}
class Labrador implements Dog{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
    bark(): void {
        console.log("Dog is barking");

    }
    makeSound(){
        this.bark();

    }
}
let Dog = new  Labrador("Tommy");
Dog.eat();
Dog.bark();
Dog.makeSound();

