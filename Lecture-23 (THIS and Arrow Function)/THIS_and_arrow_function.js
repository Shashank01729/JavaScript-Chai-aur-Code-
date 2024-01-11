const user = {
    username: "Shashank",
    price: 99,
    welcomeMessage: function (){
        console.log(`${this.username}, welcome to website`); // this talks about current context
        console.log(this)
    }
}

user.welcomeMessage();
user.username="Muskan"; // Context changed now
user.welcomeMessage();


console.log(this); // {}
// Current context is empty, since we are inside node environment
/*
Inside browser there is the engine of this javascript, when we run console.log(this), it gives window 
because the global object inside the browser is window, that's the reason we are able to capture all 
the events inside the window
*/


// But inside function it is different
function chai(){
    console.log(this);
}
chai();

/* 
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  navigator: [Getter],
  fetch: [Function: fetch],
  crypto: [Getter]
}
*/


// this works inside objects (or this context works inside objects), doesn't work inside function
// Type-1
function one(){
    const username="Shashank";
    console.log(this.username); // undefined
}
one();

// Type-2
const two = function (){
    const username="Shashank";
    console.log(this.username); // undefined
}
two();



// Arrow Function

const three = () => {
    const username="Shashank";
    console.log(this.username); // undefined
}
three();

const four = () => {
    const username="Shashank";
    console.log(this); // {}
}
four();


// Pure Arrow Function
// () => {}
// Basic
const addtwo1 = (num1,num2) => {
    return num1+num2
}
console.log(addtwo1(3,4));


// Implicit Return, you don't have to write return keyword
const addtwo2 = (num1,num2) => (num1+num2) // mostly used in react
console.log(addtwo2(3,4));
// wrapped in curly braces, will have to write return
// wrapped in circular parenthesis, no need to write return


// Returning Object
const addtwo3 = (num1, num2) => {username: "Shashank"}
console.log(addtwo3(3,4)); // undefined

// Will have to wrap in parenthesis to return object
const addtwo4 = (num1, num2) => ({username: "Shashank"})
console.log(addtwo4(3,4));


const myArray = [2,5,3,7,8]
// myArray.forEach(() => ())


let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);
console.log(sum);

function myFunction(item){
  sum += item;
}