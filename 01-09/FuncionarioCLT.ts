import { Funcionario } from "./Funcionario";

export class FuncionarioCLT extends Funcionario {
    nome:string
    salarioFixo:number

    constructor(nome:string, salarioFixo:number){
        super(nome)
        this.salarioFixo = salarioFixo
    }
    calcularSalario(salario:number): number {
        return this.salarioFixo
    }
}