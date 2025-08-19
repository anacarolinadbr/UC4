import { Personagem } from "./Personagem";

export class Monstro{
    private nome:string;
    private vida:number;
    private forca:number

    constructor(nome:string, vida:number, forca:number){
        this.nome = nome
        this.vida = vida
        this.forca = forca
    }
    dano(personagem:Personagem):void{
        this.vida -= personagem.getForca()
        console.log(`${this.nome} foi atingido pelo personagem, ele atacou com ${personagem.getForca()} de força, ${this.nome} tem agora ${this.vida} de vida`)
    }

    atacar(personagem:Personagem):void{
        personagem.dano(this) 
        console.log(`${this.nome} atingiu seu oponente com ${this.forca} de força, o personagem está com ${this.vida} de vida`)
    }

    getNome():string{
        return this.nome
    }

    getVida():number{
        return this.vida
    }
    getForca():number{
        return this.forca
    }

    setForca(forca:number): void{
        this.forca = forca
    }

    setVida(vida:number): void{
        this.vida = vida
    }
}