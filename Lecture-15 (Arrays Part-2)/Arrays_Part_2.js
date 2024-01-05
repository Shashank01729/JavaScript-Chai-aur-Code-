const marvel_heroes=["Spider-Man","Thor","IronMan"] 
const dc_heroes=["SuperMan","Flash","BatMan"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][0]);

marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);
// It is beacuse concat returns a new array

const allHeroes=marvel_heroes.concat(dc_heroes) // Returns a new array
console.log(allHeroes);

// spread operator
const all_new_heroes = [...marvel_heroes, ...dc_heroes] // No limitations, can add many arrays together
console.log(all_new_heroes);

// Handling this kind of situation
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // flat(<depth to which we have to solve>)
console.log(real_another_array)

// Tell if this is an array or not
console.log(Array.isArray(marvel_heroes)) 
console.log(Array.isArray("Shashank"))

// To make a string,objects,etc into a array
console.log(Array.from("Shashank"))
console.log(Array.from("1,2,3,4".split(",")))
console.log(Array.from({name:"Shashank"})); // It is not able to convert it, so it returned empty array (interesting case)
// We will have to tell it to make the array from keys or values

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); // Returns a new array from a set of elements

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray