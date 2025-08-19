import { Animal } from "./Animal";
import { Crocodile } from "./Crocodile";
import { Dog } from "./Dog";
import { Owl } from "./Owl";

//Cachorro
const myDog:Dog = new Dog("Bob", 10)

console.log(myDog.name)
console.log(myDog.weight)

myDog.bark()
myDog.eat()

//Coruja
const myOwl:Owl = new Owl("Linda", 5) 

console.log(myOwl.name)
console.log(myOwl.weight)

myOwl.fly()
myOwl.eat()

//Crocodilo
const myCrocodile:Crocodile = new Crocodile("Crocs", 50)

console.log(myCrocodile.name)
console.log(myCrocodile.weight)

myCrocodile.eat()
myCrocodile.swim()

//Array
const array:Animal[] = [myDog, myOwl, myCrocodile]
for (let i = 0; i < array.length; i++) {
    array[i].eat()
}