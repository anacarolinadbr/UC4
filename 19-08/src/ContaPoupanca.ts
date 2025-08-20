import { contaBancaria } from "./ContaBancaria";

export class ContaPoupanca extends contaBancaria {

    constructor(saldo:number){
        super(saldo)
    }

    aplicarJuros(valor: number): void {
        const juros = this.saldo * valor
        this.atualizarSaldo(juros)
        console.log(`Seu saldo é de ${this.saldo}`)
    }
}