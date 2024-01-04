const score=100 // Automatically defined
console.log(score);
const balance=new Number(100) // Explicitly defining it
console.log(balance);
// In console we can go to number and see prototype

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //  Good for e-commerce website

const otherNumber=24.3253
console.log(otherNumber.toPrecision(3)); // returns a string
console.log(otherNumber.toPrecision(3).length);
console.log(otherNumber);
console.log(otherNumber.toPrecision(1)); // will give other as exponential

const hundreds=1000000
console.log(hundreds.toLocaleString()) // Commas by US standards (Default)
console.log(hundreds.toLocaleString('en-IN')) // Commas by Indian standards

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.length);
console.log(Number.name);
console.log(Number.isFinite());
console.log(Number.isInteger());
console.log(Number.isSafeInteger());


// ******************** MATHS ********************
console.log(Math); // Objects with many propeties, go in inspect element ,go in console and can see many values
console.log(Math.PI);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
// To control it, can use ceil or floor
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.pow(2,3));
console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,3,4,5));


// Random
console.log(Math.random()); // Between 0 and 1, mostly decimal
console.log(Math.random()*10);
// But still, if random value is 0.04 or something so it can't happen
// If we want 1 to be minimum then add 1
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10))+1);

// Defining min and max
const min=10
const max=20
// Formula, used 1 for not getting 0, and to get minimum(Here 10) add min, used floor for integer value
console.log(Math.floor(Math.random()*(max-min+1)+min));