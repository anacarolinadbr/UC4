import { Monstro } from "./Monstro"
import { Personagem } from "./Personagem"

const personagem: Personagem = new Personagem("Amabel", "guerreiro", 10, 3)
const monstro: Monstro = new Monstro("Kraken", 10, 5)

function batalha(personagem: Personagem, monstro: Monstro) {
  
// Amabel ataca o Kraken
personagem.atacar(monstro); 

console.log("")

// Kraken ataca personagem
monstro.atacar(personagem)

console.log("")

// Amabel se cura
personagem.curar(2)


console.log("\n--- FIM DA BATALHA ---")
    if (personagem.getVida() > 0) {
        console.log(`Parabéns! Você derrotou ${monstro.getNome()} e pode finalmente seguir para casa. `)
        console.log(`Sua vida restante: ${personagem.getVida()}`)
    } else {
        console.log("A criatura foi forte demais... Você foi derrotado. ")
        console.log(`Vida restante do monstro: ${monstro.getVida()}`)
    }
}

batalha(personagem , monstro)