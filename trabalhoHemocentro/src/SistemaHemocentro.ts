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
        //Const vai guardar o novo objeto na variavel
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
                `${doador.getNome()}        | ${doador.getIdade()}         | ${doador.getPeso()}        | ${doador.getTipoSanguineo()}       | ${doador.getDataUltimaDoacao()}`
            )
        })
    } 
    
    buscarPorTipoSanguineo(): void {
        const tipo = readline.question("Digite o tipo sanguíneo desejado: ")
        
        //o this é a lista dos cadastrados e o filter vai criar um novo array como os elementos que passarem ()
        //doador => é o parametro da função, que depois vai ser chamado o metodo da classe doador para obter o tipo sanguineo dos doadores
        // === tipo vai comparar o tipo sanguineo do doador 
        const encontrados = this.doadores.filter(doador => doador.getTipoSanguineo() === tipo)

        console.log("------------------")
        console.log("RESULTADO DA BUSCA")
        console.log("------------------")
    
    // 
    if (encontrados.length === 0) {
        console.log("Nenhum doador encontrador com esse tipo")
        return
    }

    console.log('NOME        |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ÚLTIMA DOAÇÃO DE SANGUE')
    console.log('-------------------------------------------------------------------------------')

    //Usamos o for of para percorrer todos os doadroeres
    for (const doador of encontrados) {  
        console.log(
            doador.getNome() + " | " +
            doador.getIdade() + " | " +
            doador.getPeso() + " | " +
            doador.getTipoSanguineo() + " | " +
            doador.getDataUltimaDoacao() + " | "
        )
        
    }
    }

    buscarPorDataUltimaDoacao(): void {
        const dataDesejada = readline.question("Digite a data desejada (dd/mm/aaaa): ")
        //Split vai dividir as strings pelo separador / e o map(Number) vai converter cada item para um número
        const [dia, mes, ano] = dataDesejada.split("/").map(Number)

        //Vai criar um objeto Date a partir dos números
        const dataDesejadaNova = new Date(ano, mes, dia)

        const encontrados = this.doadores.filter(doador => {
        //Pega a data da ultima doação feita pelo doador
        const [diaC, mesC, anoC] = doador.getDataUltimaDoacao().split("/").map(Number)
        //Criando objeto
        const doacaoRegistrada = new Date(anoC, mesC, diaC)
        
        return doacaoRegistrada < dataDesejadaNova
        //    25/08/25       menor    26/08/25    true
        //Ele vai retonar quando a data for menor que a novaDataDesejada
        })

        console.log("----------------------")
        console.log("RESULTADO DA BUSCA: ")
        console.log("----------------------")


    console.log('NOME        |  IDADE  |  PESO  |  TIPO SANGUINEO  |  ÚLTIMA DOAÇÃO DE SANGUE')
    console.log('-------------------------------------------------------------------------------')

    for (const doador of encontrados) {  
        console.log(
            doador.getNome() + " | " +
            doador.getIdade() + " | " +
            doador.getPeso() + " | " +
            doador.getTipoSanguineo() + " | " +
            doador.getDataUltimaDoacao() + " | "
        )
    }
    }
  
}