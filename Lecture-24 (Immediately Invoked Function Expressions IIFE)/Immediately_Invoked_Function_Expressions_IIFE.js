// We want that whenever file start, database gets connected
// Don't want function variables to get polluted by global scope variables

// IIFE: Immedaitely Invoked Function Expression

function chai(){
    console.log(`Database Connected`);
}
chai();
// But want to invoke immediately


/*
function chai(){
    console.log(`Database Connected`);
}()
*/
// Giving error


// So place the function in (), just like we did in arrow function, when kept inside parenthesis then a block is made automatically and can work in it
(function chai(){
    console.log(`Database Connected`);
})();


// ()()
// IIFE
// The function which gets immediately executed and we also get problem from the pollution of global scope most 
// of the time, so to remove those global scope pollution we use IIFE


// Can we write this above function as arrow function? Yes

/*
(() => {
    console.log(`DB CONNECTED`);
})()
*/
// Now it will give error
// It is because the immediately invoked function is invoked but doesn't know where to stop the context
// To solve this situation we will have to end it by using ;, used ; in line 24 now

(() => {
    console.log(`DB CONNECTED`);
})();
// The problem was not with the function or arrow function, it was with the semi colon


// Passing variables
((name) => {
    console.log(`DB CONNECTED ${name}`);
})('Shashank');

// The secret sauce for encapsulating code and maintaining a clean global scope