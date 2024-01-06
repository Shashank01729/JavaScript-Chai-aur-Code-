// console.log("S");
// console.log("H");
// console.log("A");
// console.log("S");
// console.log("H");
// console.log("A");
// console.log("N");
// console.log("K");

// If want to run many times we can use function
function SayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("K");
}
SayMyName();
SayMyName();
// SayMyName 
// It is only a reference, where it is


function addTwoNumber1(num1, num2){
    console.log(num1+num2)
}
addTwoNumber1()


function addTwoNumber2(num1, num2){
    console.log(num1+num2)
}
addTwoNumber2(3,4)


function addTwoNumber3(num1, num2){
    return num1+num2
}
console.log(addTwoNumber3(1,2));


function addTwoNumber4(num1, num2){
    return num1+num2
}
console.log(addTwoNumber4(1,"2"));


// First we have to check if the datatype of both is number then we will add them together
function addTwoNumber5(num1, num2){
    return num1+num2
}
console.log(addTwoNumber5(1,"a"));

function addTwoNumber6(num1, num2){
    return num1+num2
}
console.log(addTwoNumber6(1,null));

/* 
    Parameters: Inside function defination
    Arguments: The values passed when calling the function
*/


function addTwoNumber7(num1, num2){
    let ans=num1+num2
    console.log("Adding both numbers")
    return ans
    console.log("Shashank") // Unreachable code, Since function is already returned
}
const result=addTwoNumber7(2,8)
console.log(result);


function LoginUserMessage1(username){
    return `${username} Just Logged In!`
}
console.log(LoginUserMessage1("Shashank"));


function LoginUserMessage2(username){
    return `${username} Just Logged In!`
}
console.log(LoginUserMessage2(""));


function LoginUserMessage3(username){
    return `${username} Just Logged In!`
}
console.log(LoginUserMessage3()); // undefined


function LoginUserMessage4(username){
    if(username===undefined){
        return "Please enter a username";
    }
    return `${username} Just Logged In!`
}
console.log(LoginUserMessage4());


// Professional Code
function LoginUserMessage5(username){
    if(!username){
        return "Please enter a username";
    }
    return `${username} Just Logged In!`
}
console.log(LoginUserMessage5());


// Default value
function LoginUserMessage6(username="Devu"){
    if(!username){
        return "Please enter a username";
    }
    return `${username} Just Logged In!`
}
console.log(LoginUserMessage6()); // If value passed then it will just override it