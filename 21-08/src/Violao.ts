import { Instrumento } from "./Instrumento";

export class Violao extends Instrumento{

    tocar():void{
        console.log(`O violao está tocando`)
    }
}