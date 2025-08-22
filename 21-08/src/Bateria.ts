import { Instrumento } from "./Instrumento";

export class Bateria extends Instrumento{

tocar():void{
    console.log(`A bateria está sendo tocada`)
}
}