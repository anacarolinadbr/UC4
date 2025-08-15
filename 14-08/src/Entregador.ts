import { Pacote } from "./Pacote"

export class Entregador {
    private nome:string

    constructor(nome:string){
        this.nome = nome
    }

    entregarPacote(pacote:Pacote) {
        console.log(`${this.nome} esta entregando um pacote de ${pacote.getPeso()} para ${pacote.getDestino()}`)
    }

    trocarEndereco(pacote:Pacote, novoEndereco:string){
        pacote.setDestino(novoEndereco)
        console.log(`O nov endreço é ${novoEndereco}`)
    
    }
}