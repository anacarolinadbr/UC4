

// Array que aceite qualquer tipo (number, strings ou qualquer outro)

function qualquerCoisa(coisa:any){
    console.log(coisa)
}

qualquerCoisa(1230)
qualquerCoisa("Ana")

//Generics

function retornaItem<T>(item: T): T {
    return item;
  }
  
  retornaItem<number>(10);     // ✅ retorna um número
  retornaItem<string>("oi");   // ✅ retorna uma string
  retornaItem<boolean>(true);  // ✅ retorna um boolean



  import {Estoque} from "./Estoque";
  import { Livro } from "./Livro";
  import { Roupa } from "./Roupa";

// Estoque de livros
const estoqueLivros = new Estoque<Livro>();
estoqueLivros.adicionar(new Livro("Harry Potter", "J.K. Rowling"));
estoqueLivros.adicionar(new Livro("O Hobbit", "Tolkien"));
console.log(" Livros no estoque:", estoqueLivros.listar());

// Estoque de roupas
const estoqueRoupas = new Estoque<Roupa>();
estoqueRoupas.adicionar(new Roupa("Camiseta", "M"));
estoqueRoupas.adicionar(new Roupa("Calça Jeans", "42"));
console.log(" Roupas no estoque:", estoqueRoupas.listar());