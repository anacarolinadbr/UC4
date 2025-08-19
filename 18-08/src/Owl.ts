import { Animal } from "./Animal";

export class Owl extends Animal {

    constructor(name:string, weigth:number)  {
        super(name, weigth)
    }

    fly(): void{
        console.log(`${this.name} is flying`)
    }
}