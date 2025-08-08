
//Exercicio 1
const sociedade:string[] = ['Frodo', 'Sam', 'Gandalf', 'Legolas', 'Gimli', 'Merry', 'Pippin', 'Aragorn', 'Boromir'];
let hobbits:string[] = ["Frodo", "Sam", "Merry", "Pippin"];

for (let i = 0; i < sociedade.length; i++) {
    for (let j = 0; j <hobbits.length; j++) {
        if (sociedade[i] === hobbits[j]) {
            console.log("Hobbits encontrados:" + sociedade[i])
        }
    }
 }


// Exercicio 2
const personagens = [
    { nome: 'Luke Skywalker', jedi: true },
    { nome: 'Leia Organa', jedi: false },
    { nome: 'Yoda', jedi: true },
    { nome: 'Darth Vader', jedi: false },
  ];


for (const personagem of personagens) {
    if (personagem.jedi) {
        console.log("Jed encontrado: " + personagem.nome);
    }
} 

// Exercico 3
const personagens = {
    Naruto: 'Uzumaki',
    Sasuke: 'Uchiha',
    Sakura: 'Haruno',
    Kakashi: 'Hatake'
  };

for (const personagem in personagens) {
    console.log(`${personagens} pertence ao clã ${personagens[personagem]}`)
}


// Exercicio 4 
const personagens = [
    { nome: 'Goku', poder: 15000 },
    { nome: 'Vegeta', poder: 14999 },
    { nome: 'Krillin', poder: 7500 },
    { nome: 'Freeza', poder: 20000 },
  ];

  personagens.forEach(personagem => {
    if (personagem.poder > 8000) {
        console.log(`O poder de ${personagem.nome} é de mais de 8000!`);
    }
  })

// Exercicio 5
const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Mewtwo', 'Squirtle'];
let i = 0;
while (i < pokemons.length) {
  const nome = pokemons[i];

  if (nome === 'Mewtwo') {
    console.log(Pokémon lendário encontrado: ${nome}!);
    break;
  }

  console.log(Capturando ${nome});
  i++;
}


// Exercicio 6
let passos = 0;
const passosParaMordor = 5;

do {
    passos++;
    console.log("Dando passos " + passos);
    } while (passos < passosParaMordor);
    console.log("Chegamos em Mordor! ")
