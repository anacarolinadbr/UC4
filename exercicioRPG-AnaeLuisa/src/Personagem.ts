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

    atacar(monstro:Monstro):void{
        monstro.dano(this) 
        console.log(`${this.nome} atingiu seu oponente com ${this.forca} de força, o monstro está com ${this.vida} de vida`)
    }

    dano(monstro:Monstro):void{
        this.vida -= monstro.getForca()
        console.log(`${this.nome} foi atingido pelo monstro, ele atacou você com ${monstro.getForca()} de força, você tem agora ${this.vida} de vida`)
    }

    curar(curar:number):void{
        if(this.vida + curar < 10) {
            this.setVida(this.vida + curar)
            console.log(`Você se curou, agora tem ${this.vida} de vida`)
        } else {
            console.log("Não pode ultrapassar sua vida máxima")
        }
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

    setForca(forca:number): void{
        this.forca = forca
    }

    setVida(vida:number): void{
        this.vida = vida
    }
}



