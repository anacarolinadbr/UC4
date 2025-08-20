import { Veiculo } from "./Veiculo"

export class Carro extends Veiculo{
    
    constructor(velocidade:number) {
        super(velocidade)
    }

    acelerar(velocidade:number): void {
       this.velocidade = velocidade 
       console.log(`Velocidade atual ${this.velocidade}`)
    }



}