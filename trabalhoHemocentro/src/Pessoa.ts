export class Pessoa {
    //Declarando atributos para a classe
    protected nome: string
    protected idade: number
    protected peso: number
    //Protected - só pode acessar nesta classe ou nas classes filhas 
    

    //Constructor para criar uma nova pessoa e vai receber os três valores 
    constructor(nome:string, idade:number, peso:number){
        this.nome = nome
        this.idade = idade
        this.peso = peso
    }

    //Método vai retorar uma string com as informações da pessoa
    mostrarInfo():string {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Peso: ${this.peso}`

    }

    //Método getNome é para "pegar" o valor do atributo nome
    getNome():string{
        return this.nome
    }
     
    //Método setNome é para alterar o valor da variavel nome 
    setNome(novoNome:string): void{
        this.nome = novoNome 
    }

}