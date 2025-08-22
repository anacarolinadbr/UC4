import { contaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends contaBancaria {

    constructor(saldo:number){
        super(saldo)
    }

    aplicarJuros(valor: number): void {
        const juros = this.saldo * 0.05
        this.atualizarSaldo(juros)
        console.log(`Seu saldo é de ${this.saldo}`)
    }
}