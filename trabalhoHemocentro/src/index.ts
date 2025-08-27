import { Doador } from "./Doador";
import { SistemaHemocentro } from "./SistemaHemocentro";
import * as readline from 'readline-sync';

const hemocentro =  new SistemaHemocentro()



//Cria uma variavel "opção" para ininicar ela uma string vazia 
let opcao = ''

//Com o while ele vai manter o menu rodando, até que se insira o número 5 de sair
while (opcao != '5') {
    console.log('===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====')
    console.log('1- Cadastar doador')
    console.log('2- Listar doadores')
    console.log('3- Buscar doador por tipo sanguíneo')
    console.log('4- Buscar doador por data da última doação')
    console.log('5- Sair')

    opcao = readline.question("Escolha uma opção: ")

    switch(opcao){
        case '1':
            hemocentro.cadastrarDoador()
            break
        case '2':
            hemocentro.listarDoadores()    
            break
        case '3':
            hemocentro.buscarPorTipoSanguineo()
            break
        case '4':
            hemocentro.buscarPorDataUltimaDoacao()
            break    
        case '5':
            console.log("Saindo..")
                break
            
    }
}