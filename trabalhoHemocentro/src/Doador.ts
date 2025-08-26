// Doador.ts
import { Pessoa } from "./Pessoa";

export class Doador extends Pessoa {
    protected tipoSanguineo: string;
    protected dataUltimaDoacao: string;

    constructor(nome: string, idade: number, peso: number, tipoSanguineo: string, dataUltimaDoacao: string) {
        super(nome, idade, peso);
        this.tipoSanguineo = tipoSanguineo;
        this.dataUltimaDoacao = dataUltimaDoacao;

    }

    getTipoSanguineo():string{
        return this.tipoSanguineo
    }
     
    setTipoSanguineo(novoTipo:string): void{
        this.tipoSanguineo = novoTipo 
    }
    getDataUltimaDoacao():string{
        return this.dataUltimaDoacao
    }
     
    setDataUltimaDoacao(novaData:string): void{
        this.dataUltimaDoacao = novaData 
    }

}