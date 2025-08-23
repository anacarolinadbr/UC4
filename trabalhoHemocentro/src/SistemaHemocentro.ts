import { Doador } from "./Doador";
import * as readline from 'readline-sync';

export class SistemaHemocentro {
    //Lista privada para guardar todos os doadores
    private doadores:Doador[] = []

    cadastrarDoador():void {
        const nome = (readline.question("Nome do doador: "))
        //Por conta do readline sempre retonar uma string, tem que usar o parseInt() para converter uma string em número inteiro
        const idade = parseInt(readline.question("Idade do doador: "))
        const peso = parseInt(readline.question("Peso do doador: "))
        const tipoSanguineo = (readline.question("Qual tipo sanguineo do doador: "))
        const dataUltimaDoacao = (readline.question("Data da última doação de sangue: "))
    
        //Cria um novo objeto da classe "Doador" usando os dados 
        //Const vai guardar o novo objeto na varavel
        const novoDoador = new Doador (nome, idade, peso, tipoSanguineo, dataUltimaDoacao)
        console.log("Doador cadastrado com sucesso!")
        //Vai adiconar um novo doador, com o push vai adicionar no final da lista 
        this.doadores.push(novoDoador)
    }
    //Método para listar
    listarDoadores():void {
        console.log('--------------------')
        console.log('LISTAGEM DE DOADORES')
        console.log('--------------------')
        console.log('NOME        |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ÚLTIMA DOAÇÃO DE SANGUE')
        console.log('-------------------------------------------------------------------------------')
        //this vai pegar a lista de doadores cadastrados e o forEach vai percorrer cada um da lista 
        // e o "doador =>"" vai executar para cada doador
        this.doadores.forEach(doador => {
            console.log(
                `${doador.getNome()} | ${doador.getIdade()} | ${doador.getPeso()} | ${doador.getTipoSanguineo()} | ${doador.getDataUltimaDoacao()}`
            )
        })
    } 
    
    const buscarPorTipoSanguineo(): void {
        const tipo = readline.question("Qual o seu tipo sanguineo?")
        
        //o this é a lista dos cadastrador e o filter vai criar um novo array como os elementos que passarem na condição 
        const encontrados = this.doadores.filter(doador => doador.getTipoSanguineo().toUpperCase() === tipo)

    }
   


}