export class contaBancaria {
    protected saldo:number

    constructor(saldo:number){
        this.saldo = saldo
    }

    protected atualizarSaldo(valor:number): void {
        this.saldo += valor
        console.log(`Seu saldo atual é de ${this.saldo}`)
    }
}