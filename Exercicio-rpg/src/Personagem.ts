import { Monstro } from "./Monstro";

export class Personagem {
    nome:string;
    classe:string;
    vida:number;
    forca:number;

    constructor (nome:string, classe:string, vida:number, forca:number){
        this.nome = nome
        this.classe = classe
        this.vida = vida
        this.forca = forca
    }

    atacar(vidaMonstro:Monstro):void{
        this.forca = vidaMonstro.getVida()
        console.log(`Você atingiu seu oponente com ${this.getForca} de força`)
    }

    dano(vida:number):void{
        this.vida = this.getVida()

    }

    curar(valor:number):void{
        
    }


    getNome():string{
        return this.nome
    }

    getClasse():string{
        return this.classe
    }

    getVida():number{
        return this.vida
    }
    getForca():number{
        return this.forca
    }

}

