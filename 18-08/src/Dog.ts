import { Animal } from "./Animal";

//Usamos a palvra reservada 'extends' para identificar que uma classe é filha de outra
export class Dog extends Animal {
    // Dog como é filho da classe animal, já herda os atributos 'name' e 'weight'
    
    constructor(name:string, weigth:number)  {
        // O metoddo 'super()' chama o construtor da classe pai
        // Assim, reutilizamos ele na classe filha
        super(name, weigth)
    }

    bark(): void{
        console.log(`${this.name} is barking`)

    }
}