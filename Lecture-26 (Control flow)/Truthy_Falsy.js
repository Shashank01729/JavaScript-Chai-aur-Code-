// const userEmail="Shashank@gmail.com";
// const userEmail="";
const userEmail=[];
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}


/* 
    Falsy Values:
        false
        0
        -0
        BigInt
        0n
        ""
        null
        undefined
        nan

    Other than the above all are truthy values

    Truthy Values:
        "0"
        "false"
        " "
        []
        {}
        function(){}  // Empty Function
*/

if(userEmail.length===0){
    console.log("Array is empty");
}

// We made the array of keys and checked it's length
const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

console.log(false=="");
console.log(false==0);
console.log(false=="0");
console.log(0=="");


// Nullish Coalescing Operator(??) : null undefined (for them only)
let val1;
val1=5??10; // 5 comes first so 5 is assigned
console.log(val1);

// We we get reponse from the website then we use this operator
// Because the response can or cannot come, if value is coming then assign the value, if null is coming then assign null

val1=null??10; // 10 gets assigned since the first value is null so safety check is done, if no value then null is assigned and if a value is there (like here, 10) then 10 is assigned
console.log(val1);

val1=undefined??15;
console.log(val1); // 15

val1=null ?? 10 ?? 20;
console.log(val1);

// It is used to handle the error also


// Ternary Operator
// condition ? true statement : false statement;
4>5 ? console.log("True") : console.log("False");

const iceteamPrice=100;
iceteamPrice<=80 ? console.log("Less than 80") : console.log("More Than 80");