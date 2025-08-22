import { Bateria } from "./Bateria";
import { Bicicleta } from "./Bicicleta";
import { Boleto } from "./Boleto";
import { Cachorro } from "./Cachorro";
import { Carro } from "./Carro";
import { CartaCredito } from "./CartaoCredito";
import { Gato } from "./Gato";
import { Instrumento } from "./Instrumento";
import { Pagamento } from "./Pagamento";
import { Veiculo } from "./Veiculo";
import { Violao } from "./Violao";

//Animal
const meuAnimal:Cachorro = new Cachorro()
const outroAnimal:Gato = new Gato()

meuAnimal.falar()
outroAnimal.falar()
console.log("")

//Veiculo
const meuCarro:Carro = new Carro()
const minhaBicicleta:Bicicleta = new Bicicleta()

const lista:Veiculo[] = [
    new Veiculo(), new Carro(), new Bicicleta()
]

//forEach para percorrer todos os itens do array
//para cada item da lista, ele chama o item ed veiculo e executa o metodo mover()
lista.forEach(veiculo => veiculo.mover());
console.log("")


//Instrumento
const meuViolao:Instrumento = new Violao
const minhaBateria:Instrumento = new Bateria
const meuInstrumento:Instrumento = new Instrumento

meuViolao.tocar()
minhaBateria.tocar()
meuInstrumento.tocar()
console.log("")


//Pagamento
const pagamento:Pagamento[] = [
    new Pagamento, new Boleto, new CartaCredito
]

pagamento.forEach(pagamento => pagamento.processar())

