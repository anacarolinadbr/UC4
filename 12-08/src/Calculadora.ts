export class Calculadora {

numeroUm:number
numeroDois:number

constructor(numUm:number, numDois:number){
    this.numeroUm = numUm;
    this.numeroDois = numDois;
}

somar():number{
    return this.numeroUm + this.numeroDois
}
subtrair():number{
    return this.numeroUm - this.numeroDois
}
dividir():number{
    return this.numeroUm / this.numeroDois
}
multiplicar():number{
    return this.numeroUm * this.numeroDois
    }
}