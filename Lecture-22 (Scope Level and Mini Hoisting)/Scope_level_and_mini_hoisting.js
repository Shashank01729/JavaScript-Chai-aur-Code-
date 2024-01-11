// DOM: Document Object Model (Let us manipulate HTML web page through JavaScript)

/*
function one(){
    const username="Shashank";

    function two(){
        const website="Youtube";
        console.log(username);
    }
    // console.log(website); // gives error, that's why two() never gets executed, commenting it

    two();
}

one();
*/

/*
if(true){
    const username="Shashank";
    if(username==="Shashank"){
        const website="Youtube";
        console.log(username+website);
    }
    console.log(website)
}
console.log(username)
*/


// ++++++++++++++++++++ INTERESTING ++++++++++++++++++++
// Type-1
function addone(num){
    return num+1;
}
addone(5);

// Type-2
const addtwo = function(num){
    return num+2;
}
addtwo(5);
// Inside javascript variables are very powerful, they can hold anything (json values , functions ,etc)


// Major difference between these two
// Type-1 (Can access before declaration)
console.log(addOne(5));
function addOne(num){
    return num+1;
}

// Type-2 (Cannot access before declaration)
console.log(addTwo(5));
const addTwo = function(num){
    return num+2;
}
// It was a variable that's why error

// Hoisting Concept