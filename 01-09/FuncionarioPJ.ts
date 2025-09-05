import { Funcionario } from "./Funcionario";

export class FuncionarioPJ extends Funcionario {
    nome:string
    ganhoHora: number
    horasTrabalhadas:number

    constructor(nome:string, horasTrabalhadas:number, ganhoHora:number){
        super(nome)
        this.horasTrabalhadas = horasTrabalhadas
        this.ganhoHora = ganhoHora 
    }

    calcularSalario(): number {
        return this.horasTrabalhadas * this.ganhoHora

    }
}
