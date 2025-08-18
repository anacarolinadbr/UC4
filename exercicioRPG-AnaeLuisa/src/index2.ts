import * as readline from 'readline-sync';

console.log("=== MENU PRINCIPAL ===");
console.log("1 - Atacar");
console.log("2 - Curar");
console.log("3 - Fugir");

const opcao = readline.question("=== ESCOLHA OPÇÃO ===  ");

switch (opcao) {
  case "1":
    console.log("você está atacando.");
    break;
  case "2":
    console.log("100% recuperado; pronto para a próxima.");
    break;
  case "3":
    console.log("Fugindo...");
    break;
  default:
    console.log("Opção inválida.");
}