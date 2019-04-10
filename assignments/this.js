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
    return `Hello ${this.name}!`; //is in the Global scope, will refer to the window object
}

// Principle 2

// code example for Implicit Binding
const pokemon = { // Creates a new object 'pokemon'
    type: "Fire",
    name: "Charmander",
    pokedexNumber: 4,
    aboutPokemon: function() { // creates a method that returns a statement with the object's values
        return `${this.name} is a ${this.type} and is no #${this.pokedexNumber}.`;  // 'this' keyword refers to the object 'pokemon'
    }
}
console.log(pokemon.aboutPokemon());


// Principle 3

// code example for New Binding
function PokemonAbilities(name) { // constructor function 'PokemonAbilities'
    this.name = name,
    this.go = 'Go',
    this.attack = 'attack!',
    this.fight = function() { // Creates a function that console logs the statement. 'This' refers to the specific object (mewtwo, abra) that is created and returned by the constructor function
        console.log(`${this.go} ${this.name}, ${this.attack}`);
    }

}
const mewtwo = new PokemonAbilities('Mewtwo'); //object 1
const abra = new PokemonAbilities('Abra'); // object 2
mewtwo.fight(); //invokes the fight method
abra.fight();


// Principle 4

// code example for Explicit Binding
const squirtle = { // creates an object 'squirtle'
    name: "Squirtle",
    type: "Water"
}
function infoSquirtle(move1, move2, move3, move4) {
    return `This is ${this.name} and knows the moves ${move1}, ${move2}, ${move3}, ${move4}`;
}
const squirtleMoves = ["Tackle", "Bubble", "Water Gun", "Tail Whip"]; // Array of moves

console.log(infoSquirtle.apply(squirtle, squirtleMoves)); //Whenever call or apply or bind method is used, this is explicitly defined.