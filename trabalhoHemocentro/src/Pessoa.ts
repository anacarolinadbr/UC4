export class Pessoa {
    protected nome: string
    protected idade: number
    protected peso: number
    

    constructor(nome:string, idade:number, peso:number){
        this.nome = nome
        this.idade = idade
        this.peso = peso
    }

    mostrarInfo():string {
        return `Nome: ${this.nome}, Idade: ${this.idade}, Peso: ${this.peso}`

    }

    getNome():string{
        return this.nome
    }
     
    setNome(novoNome:string): void{
        this.nome = novoNome 
    }

}