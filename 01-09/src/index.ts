/*import { FuncionarioCLT } from "./FuncionarioCLT";
import{FuncionarioPJ } from "./FuncionarioPJ";

const CLT = new FuncionarioCLT("Ana", 2000)
const PJ = new FuncionarioCLT("Ana Carolina", 100, 50)

console.log(`${CLT.nome}, salário: R$${CLT.calcularSalario()}`)
console.log(`${PJ.nome}, salário: R$${CLT.calcularSalario()}`)*/


import { Administrador } from "./Administrador"
import { Forma } from "./Forma"
import { Retangulo } from "./Retangulo"
import { Triangulo } from "./Triangulo"


const formas: Forma[] = [new Retangulo(10, 5), new Triangulo(2,4)]
formas.forEach((formas, i) => {
    console.log(`Formas ${i + 1}, area ${formas.calcularArea()}`)
})

const ADM = new Administrador ("Ana", "admin", "admin")
const cliente = new Administrador ("Clara", "admin", "admin")

