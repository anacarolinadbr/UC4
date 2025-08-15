import { Entregador } from "./Entregador"
import { Pacote } from "./Pacote"
import { Pessoa } from "./Pessoa"

const aPessoa:Pessoa = new Pessoa("Ana", 18)

console.log(aPessoa.getNome())
console.log(aPessoa.apresentar())

aPessoa.setIdade(5)
console.log(aPessoa.getIdade())


const entregrador:Entregador = new Entregador("Bob")
const pacote:Pacote = new Pacote("Novo Hamburgo", 5)
entregrador.trocarEndereco(pacote, "Vicentina")
entregrador.entregarPacote(pacote)




















