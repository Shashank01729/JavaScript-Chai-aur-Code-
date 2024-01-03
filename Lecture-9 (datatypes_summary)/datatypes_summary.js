/* 
    Primitive:
    
    7 types:
        string
        number
        boolean
        null
        undefined
        symbol (To make any value unique)
        bigint


    Reference (Non-Primitive):
        Arrays
        Objects
        Functions
*/

// JavaScript is a dynamically typed language

// TypeScript, const score:number=100, for defining

const score=100
const score_value=100.3

const is_logged_in=false
const outside_temp=null
let user_email; // undefined

const id= Symbol('123') // Return type is symbol
const another_id = Symbol('123') // Looks same but not, we have given same value but the return value is not same

console.log(id===another_id) // false

const big_number=337401284987328957018n
console.log(big_number)

// Arrays
const heros = ["shaktiman", "naagraj", "doga"]

// Objects are inside curly braces, key value pairs
let my_obj = {
    name: "Shashank",
    age: 20,
}

// Functions (Variable method)

const myFunction = function(){
    console.log("Hello, World!")
}

console.log(typeof(big_number)) // bigint
console.log(typeof(outside_temp)) // object
console.log(typeof(heros)) // object
console.log(typeof(my_obj)) // object
console.log(typeof(myFunction)) // function, but it is called function object 

/* Type of Non-Primitive datatypes is called function, but for function it is called object function */

console.log(typeof(id)) // symbol
console.log(typeof(another_id)) // symbol