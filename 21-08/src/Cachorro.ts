import { Animal } from "./Animal";

export class Cachorro extends Animal {
    //Sobreescrevendo um método
    //que foi criado a classe pai
    falar():void{
        console.log("O cavhorro esta latindo")
    }

}