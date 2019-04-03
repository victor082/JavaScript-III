/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. If this is within the Global Scope, it is referring to the window.
* 2. Whenever this is followed with a dot, it is referring to the object before the dot. Implicit Binding.
* 3. You must create a new binding whenever you're using a constructor function.
* 4. Explicit binding is when you call() or apply(), this is explicit.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hello(helloWorld) {
    return `Hello ${this.name}!`;
}

// Principle 2

// code example for Implicit Binding
const pokemon = {
    type: "Fire",
    name: "Charmander",
    pokedexNumber: 4,
    aboutPokemon: function() {
        return `${this.name} is a ${this.type} and is no #${this.pokedexNumber}.`;
    }
}
console.log(pokemon.aboutPokemon());


// Principle 3

// code example for New Binding
function PokemonAbilitys() {
    this.go = 'Go'
    this.attack = 'attack!',
    this.fight = function() {
        console.log(`${this.go}, ${this.attack}`);
    }

}
const mewtwo = new PokemonAbilitys('Mewtwo');
const abra = new PokemonAbilitys('Abra');
mewtwo.fight();
abra.fight();


// Principle 4

// code example for Explicit Binding
const squirtle = {
    name: "Squirtle",
    type: "Water"
}
function infoSquirtle(move1, move2, move3, move4) {
    return `This is ${this.name} and knows ${move1}, ${move2}, ${move3}, ${move4}`;
}
const moves = ["Tackle", "Bubble", "Water Gun", "Tail Whip"];

console.log(infoSquirtle.apply(squirtle, moves));