import { Carro } from "./Carro";
import { contaBancaria } from "./ContaBancaria";
import { Guerreiro } from "./Guerreiro";


const heroi = new Guerreiro(100);
const vilao = new Guerreiro(80);

heroi.atacar(vilao)  // Atacando outro personagem (usa método público que chama protected)
heroi.treinar()

const carro = new Carro(100)
carro.acelerar(50)

const minhaConta = new contaBancaria(1000)

minhaConta.atualizarSaldo(100)  
      



