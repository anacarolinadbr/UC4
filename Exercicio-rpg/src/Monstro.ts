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

    atacar(vidaPersonagem:Personagem):void{
        
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
    
    
}


