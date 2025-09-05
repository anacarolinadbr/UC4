import { Forma } from "./Forma";

export class Triangulo extends Forma {
     constructor (private base:number, private altura:number) {
         super()
     }
 
     calcularArea(): number {
         return (this.base * this.altura) / 2
     }
 }