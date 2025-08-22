import { Pagamento } from "./Pagamento";

export class Boleto extends Pagamento{
    processar():void{
        console.log(`O boleto está sendo processado`)
    }
}