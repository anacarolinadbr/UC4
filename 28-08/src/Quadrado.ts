import { IFormaGeometrica } from "./IFormaGeometrica";

export class Quadrado implements IFormaGeometrica{
    constructor(public lado:number){}

    calcularArea(): number {
        return this.lado * this.lado
    }
    
}