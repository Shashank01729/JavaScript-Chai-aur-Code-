const arr=[0,1,2,3,4,5,true,"Shashank"]
const myarr=[0,1,2,3,4,5]
console.log(myarr[0]);

const myHeroes=["shaktimaan","naagraj"]
const myarr1=new Array(1,2,3,4,5)

// Array methods
console.log(myarr.length)

myarr.push(6)
myarr.push(7)
console.log(myarr);

myarr.pop()
console.log(myarr)

myarr.unshift(8) // Add 8 at the start of array, if many values then we have to shift all the values => load on computer
console.log(myarr); 

myarr.shift() // Removes the starting element
console.log(myarr); 

console.log(myarr.includes(1));
console.log(myarr.includes(11));
console.log(myarr.push(3)) // Give the number of elements in the array
console.log(myarr.push(3)) // Give the number of elements in the array
console.log(myarr.pop()) // Gives the number which is popped

const a=myarr.join() // It binds the array and give it in a form of string
console.log(myarr);
console.log(a);
console.log(typeof(a));

// slice, splice
console.log("A :", myarr);
const myn1=myarr.slice(1,3) // It doesn't removes from the original array and it works on range
console.log(myn1);
console.log("B :",myarr);

console.log("A :", myarr);
const myn2=myarr.splice(3,4) // It removes from the original array and splice(<from where>,<how many elements to get>)
console.log(myn2);
console.log("B :",myarr);

// splice manipulates original array(by removing some portion from it), where slice doesn't

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Arrays in Javascript are resizable
// Shallow Copy -  Share same reference point
// Deep Copy - Dono't share same reference point
