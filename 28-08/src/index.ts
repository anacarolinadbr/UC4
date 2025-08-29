import { Circulo } from "./Circulo";
import { IFuncionarios } from "./IFuncionario";
import { ILivro } from "./ILivro";
import { IProdutos } from "./IProdutos";
import { IUsuario } from "./IUsuarios";
import { Quadrado } from "./Quadrado";

//Criamos um objeto do tipo IUsuario, um objeto que segui as regras da interface que criamos
const meusuario:IUsuario = {
    nome: "Leo",
    idade:30
}
console.log(meusuario)

function mostrarProduto(produto:IProdutos): void {
    console.log(`${produto.nome} custa R$ ${produto.preco}`)
}

const produto:IProdutos = {
    nome:"Camiseta",
    preco: 99.99
}

mostrarProduto(produto)
mostrarProduto({nome:"Tenis", preco: 120.00})

const livro1:ILivro= {
    titulo:"O pequeno principe",
    autor:"Alguem",
    anoPublicacao:1940
}

function mostrarLivro(livro:ILivro):void{
    console.log(`Titulo: ${livro.titulo}
    \n Autor: ${livro.autor}
    \n Ano: ${livro.anoPublicacao}`)
}

mostrarLivro(livro1)

function calcularBonus(funcionarios:IFuncionarios): number{
    return funcionarios.salario * 0.1
  }
const funcionario1: IFuncionarios = {
    nome: "João Silva",
    cargo: "Desenvolvedor",
    salario: 5000,
  }
  
const bonus = calcularBonus(funcionario1)
console.log(`Bônus: R$ ${bonus}`)

const quadrado = new Quadrado(5)
console.log(`Area do quadrado: ${quadrado.calcularArea()}`)

const circulo = new Circulo(3)
console.log(`Area do circulo:${circulo.calcularArea()}`)