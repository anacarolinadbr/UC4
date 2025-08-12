import * as readline from 'readline-sync';

function somar (a:number, b:number): number {
    return a +b
}

function subtrair (a:number, b:number): number {
    return a - b
}

function multiplicar (a:number, b:number): number {
    return a * b
}

function dividir (a:number, b:number): number {
    return a / b
}

let  contar = true;

while (contar) {

console.log("=== MENU PRINCIPAL ===");
console.log("1 - Somar");
console.log("2 - Subtrair");
console.log("3 - Multiplicar");
console.log("4 - Dividir");
console.log("5 - Sair");

const opcao = readline.question("Escolha uma opção: ");

switch (opcao) {
case "1":
case "2":
case "3":
case "4":
     
    const numero1 = Number(readline.question("Digite o primeiro numero: "));
    const numero2 = Number(readline.question("Digite o segundo numero: "));

    let resultado: number;

    if (opcao === "1") {
        resultado = somar(numero1, numero2);
    } else if (opcao === "2") {
        resultado = subtrair(numero1, numero2);
    } else if (opcao === "3") {
        resultado = multiplicar(numero1, numero2);
    } else {
        resultado = dividir(numero1, numero2);
    }

    console.log("Resultado: " + resultado);
    break;

    case "5":
    console.log("Saindo...");
    contar = false;
    break

    default:
    console.log("Opção inválida!");
    break;
     }
}


