// A classe funciona como um 'molde' para um tipo de dado
// Exprt permite que importemos depoois esta classe em qualquer lugar do meu projeto
// A palvra 'class' indica que isto e uma classe 
// Depois de 'class', colocamos o nome da clase, que deve ser exatamento igual o nome do arquvo

export class Cachorro {
// Atributos (Coisas que objetos desta classe tem)
    nome:string;
    raca:string;
    idade:number;
    
//Construtor da classe (função/metodo que é chamado automaticamneto quando crio um objeto a partir desta classe). 
// É nele que eu defino os valores que este objeto vai ter para seus atributos
    constructor(nomeCachorro:string,racaCachorro:string,idadeCahorrro:number){
        // O atributo 'nome' desta classe vai receber como valor o que o usuario digitar
        this.nome = nomeCachorro
        this.raca = racaCachorro
        this.idade = idadeCahorrro
        
    }

//Metodos (Coisas que objetos desta classe FAZEM)
// Não usamos a palvra 'function'
    latir():void{
        console.log(`O cachorro de nome ${this.nome} está latindo.`)
    }
    correr():void{
        console.log(`O cachorro da raça ${this.raca} está correndo.`)
    }
}