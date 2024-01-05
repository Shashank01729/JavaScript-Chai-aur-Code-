//  Singleton
//  Object literals

// Making through constructor method (Singleton is made in this)
// Object.create 

const JsUser={
    name: "Shashank",
    "Full Name": "Shashank Kumar Pandey",
    "Gender": "Male",
    age: 20,
    location: "Lucknow",
    email: "shashank@gmail.com",
    isLoggedIn: false,
    ladstLoginDays: ["Monday", "Saturday"]
} // Created object

// In arrays, we can't define the keys 0,1,2,3 indexing is there already

console.log(JsUser.email)
console.log(JsUser.Gender)
console.log(JsUser["email"]) // Best method, will have to give it in string format
// console.log(JsUser.Full Name) // Can't access via dot
// console.log(JsUser."Full Name")


// Using symbol as a key

const mySymbol=Symbol("Key1")
obj={
    name: "Shashank",
    mySymbol: "myKey1" 
}
// It is not getting used as a symbol
console.log(obj.mySymbol);
console.log(typeof(obj.mySymbol));  // string instead of symbol
console.log(obj) // { mySymbol: 'myKey1' }

// To make it as a symbol use []

obj1={
    [mySymbol]: "myKey1" 
}
console.log(obj1.mySymbol); // Can;t be accessed by this, will have to use []
console.log(obj1[mySymbol]);
console.log(typeof(obj1[mySymbol]));
console.log(obj1) // { [Symbol(Key1)]: 'myKey1' }


// Changing Value
JsUser.email="Shashank@spotify.com"
console.log(JsUser)

// If don't want to change the value then freeze it
Object.freeze(JsUser)
JsUser.email="Shashank@crunchyroll.com" // Changes won't propogate
console.log(JsUser)
// No errors will we thrown

/* 
Freezing an object is the ultimate form of lock-down. Once an object has been frozen it cannot be 
unfrozen – nor can it be tampered in any manner. This is the best way to make sure that your objects 
will stay exactly as you left them, indefinitely
*/

// Adding functions, treated like a type 1 citizen (treated as variables)
obj.greetings= function(){
    console.log("Hey Fellas!")
}

// String interpolation, using backticks
console.log(obj);
console.log(obj.greetings) // function is not executed, only reference given back
console.log(obj.greetings()) // Undefined is coming
obj.greetings()

// Using this
obj.greetings1= function(){
    console.log(`Hey Fellas!, ${this.name}`)
}
obj.greetings1()