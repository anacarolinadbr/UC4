import { IFormaGeometrica } from "./IFormaGeometrica";

export class Circulo implements IFormaGeometrica{
    constructor(public raio:number){}

    calcularArea(): number {
        const PI = 3.14
        return PI * this.raio * this.raio
    }
}