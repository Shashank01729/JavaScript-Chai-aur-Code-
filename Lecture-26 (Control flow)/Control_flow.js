/* 
if(true){

}

if(false){
    
}
*/

const isUserLoggedIn=true;
if(isUserLoggedIn){
    console.log("Executed!");
}

if(2=="2"){
    console.log("Executed!");
}

// <, >, <=, >=, ==, !=, === (Strict Equal)

if(2==="2"){
    console.log("Executed!");
}

const temperature=41;
if(temperature<50){
    console.log("Less than 50");
}
else{
    console.log("Temperatre is greater than 50");
}


const score=200;
if(score>100){
    const power="fly";
    var sum=10; // global
    console.log(`User Power: ${power}`);
    console.log(`User Sum: ${sum}`);
}

// console.log(`User Power: ${power}`);  // Error, but it is good (use let, const)
console.log(`User Sum: ${sum}`);


const balance=1000;
// Implicit Scope, multiple lines can't be there
if(balance>500) console.log("test"); 

// Immature Code
// if want multiple lines then use commas
/*
if(balance>500) console.log("test"), 
console.log("test2");

if(balance>500) console.log("test"), console.log("test2");
*/


// If we want to check multiple conditions
if(balance<500){
    console.log("Less than 500");
}
else if(balance<750){
    console.log("Less than 750");
}
else if(balance<900){
    console.log("Less than 900");
}
else{
    console.log("Less than 1200");
}


// Made account on website
const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=false;
const guestUser=true;

// && || are logical operators
if(userLoggedIn && debitCard){
    console.log("Allow to buy Courses");
}

if(loggedInFromGoogle || loggedInFromEmail || guestUser){
    console.log("User Logged In");
}


//  Switch Case Statement

const month=3;
switch(month){
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("Jun");
        break;
    case 7:
        console.log("Jul");
        break;
    case 8:
        console.log("Aug");
        break;
    case 9:
        console.log("Sept");
        break;
    case 10:
        console.log("Oct");
        break;
    case 11:
        console.log("Nov");
        break;
    case 12:
        console.log("Dec");
        break;
    default:
        console.log("Default");
        break;
}

// Select the content then Shift + Alt + Down Arrow -> For Duplicate
