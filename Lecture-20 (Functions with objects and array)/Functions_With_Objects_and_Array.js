function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2));

// If many arguments (We use rest or spread operator to solve this)
// Passing Multiple values
function calculateCartPrice1(...num1){
    return num1 // Converted into array
}
console.log(calculateCartPrice1(1,2,3,4)); // [ 1, 2, 3, 4 ]


// Other method
function calculateCartPrice2(val1,val2,...num1){
    return num1 // val1 = 1, val2 = 2
}
console.log(calculateCartPrice2(1,2,3,4)); // [ 3, 4 ]


// Handling objects with functions
const user={
    username: "Shashank",
    price: 99
}
function HandleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
HandleObject(user)


// Instead of price if written prices
const user1={
    username: "Shashank",
    prices: 99
}
function HandleObject1(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
HandleObject1(user1)
// We can handle it with if else
// In typescript this type of handling is done there, we can do it with the help of javascript 
// but have to wrote more code


// Can pass direct object
HandleObject({
    username: "Devnath",
    price: 999
})  

// Passing array
const myNewArray=[100,200,300,400]
function ReturnSecondValue(getArray){
    return getArray[1]
}
console.log(ReturnSecondValue(myNewArray));
console.log(ReturnSecondValue([1,2,3,4,5]));