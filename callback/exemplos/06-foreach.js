
const animais = ["Gato", "Cachorro", "Coelho"];


function mostrarAnimal(animal) {
    console.log("Animal:", animal);
}

// forEach executa mostrarAnimal automaticamente para cada item.
animais.forEach(mostrarAnimal);

// Outra maneira de escrever a mesma ideia: arrow function.
animais.forEach((animal, indice) => {
    console.log(`Posição ${indice + 1}: ${animal}`);
});

