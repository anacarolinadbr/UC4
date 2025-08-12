import { Cachorro } from "./Cachorro";
import { Calculadora } from "./Calculadora";

//Para podermos criar um objeto da nossa classe 'cachorro', primeiro criamos uma variavel que deve ser do tipo Cachorro
//Depois, atribuimos valor a esta variavel, usando a palavra 'new' seguida do nome da classe junto a parenteses.
//Assim chamamos o construtor da classe e devemos, dentro do parenteses, passar TODOS os valores que nos definimos


//Quando criamos um objeto, chamamos isso de instanciar o objeto da classe 
const meuCachorro:Cachorro = new Cachorro("Bob", "Vira-lata", 5)
const meuOutroCachorro = new Cachorro("Tobby", "Pinscher", 2)

//Para chamarmos os metodos destes objetos, chamamos o nome da variavel + . + o nome do metodo 
meuCachorro.correr()
meuCachorro.latir()

meuOutroCachorro.correr()
meuOutroCachorro.latir()

//Para acessarmos o valor do atributo de um objeto, chamamos o nome da variavel + . + o nome do atributo

console.log(meuOutroCachorro.idade)

//Para trocarmos o valor de um atributom de um objeto chamamos o nome da variavel + . + o nome do atributo, depoius "=" e passamos o novo valor

meuCachorro.nome = `Bobbyson`
console.log(meuCachorro.nome)


//Calculadora
const minhaCalculadora:Calculadora = new Calculadora(10, 5)
console.log(minhaCalculadora.somar())
console.log(minhaCalculadora.subtrair())
console.log(minhaCalculadora.dividir())
console.log(minhaCalculadora.multiplicar())

