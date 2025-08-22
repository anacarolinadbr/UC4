import { Pagamento } from "./Pagamento";

export class CartaCredito extends Pagamento{
    processar():void{
        console.log(`O cartão de Credito está processadno o pagamento`)
    }
}