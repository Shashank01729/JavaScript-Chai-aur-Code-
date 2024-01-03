console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)
console.log(1==1)

console.log("2">1)
console.log("02">1)
console.log("1"==1)

// Typescript doesn't let us compare different datatypes

console.log(null>0)
console.log(null<0)
console.log(null==0)
console.log(null>=0)
console.log(null<=0)
console.log(null!=0)

/*
The reason is that an equality check == and comparisons >, <, >=, <= work differently.
Comparisons convert null to a number, treating it as 0. 
That's why null >= 0 is true and null > 0 is false.
*/

console.log(undefined)
console.log(undefined==0)
console.log(undefined!=0)
console.log(undefined>0)
console.log(undefined<0)
console.log(undefined>=0)
console.log(undefined<=0)

// We are going to avoid these kind of comparisons, the above ones with null and undefined

// strict check, ===
console.log("1"==1) // Here conversion happens
console.log("1"===1) // Conversison doesn't happen, it check if it is string or number