// At 1
const estaChovendo:boolean = true;
if (estaChovendo) {
    console.log("Leve guarda-chuva")
} else {
    console.groupCollapsed("O tempo está bom para caminhar")
}

//Ativ 2 
const nota:number = 7;
const resultado = nota >= 6 ? "Aprovado" : "Reprovado";
console.log(resultado)

//Ativ 3
const animal:string = 'gato';

switch (animal) {
  case "cachorro":
    console.log("Au au");
    break;
  case "gato":
    console.log("Miau");
    break;
  default:
    console.log("Desconhecido");
}

// Ativ 4 
import * as readline from 'readline-sync';
let  jogando:boolean = true;

while (jogando) {
console.log("=== MENU PRINCIPAL ===");
console.log("1 - Jogar");
console.log("2 - Carregar Jogo");
console.log("3 - Sair");
const opcao = readline.question("Escolha uma opção: ");

switch (opcao) {
  case "1":
    console.log("Jogando");
    break;
  case "2": 
    console.log("Carregando jogo");
    break;
  case "3":
    console.log("Saindo...");
    jogando = false
    break;
  default:
    console.log("Opção inválida.");
  }
}