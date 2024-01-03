"use strict"; // treat all JS code as newer version of javascript
// alert(3+3) -----> pop up in browser (We are using node js not browser)

// console.log(3+3) console.log("Shashank") 
// Will throw error

console.log(3+3); console.log("Shashank") // Reduces readability

console.log(3+3)
console.log("Shashank")

// Documentations: mdn and tc39

let name="Shashank"  // string
let age=20  // integer
let is_logged_in=false  // boolean

/* 
primitive datatypes
    number => 2^53-1
    bigint
    string => ""
    boolean => true/false
    null => standalone value
    undefined => value is not assigned
    symbol => used for uniqieness

object
*/

console.log(typeof("Shashank"))
console.log(typeof(age))
console.log(typeof(1))
console.log(typeof(6.6))
console.log(typeof(null)) //object
console.log(typeof(undefined)) //undefined, since it is a type in js

/*
The Undefined type has exactly one value, called undefined. Any variable that has not been assigned 
a value has the value undefined.
*/

/* The Null type has exactly one value, called null. */

/* The Boolean type represents a logical entity having two values, called true and false. */

/* 
The String type is the set of all ordered sequences of zero or more 16-bit unsigned integer values 
(“elements”) up to a maximum length of 2**53 - 1 elements. The String type is generally used to represent 
textual data in a running ECMAScript program, in which case each element in the String is treated as a UTF-16 
code unit value. Each element is regarded as occupying a position within the sequence. These positions are 
indexed with non-negative integers. The first element (if any) is at index 0, the next element (if any) at index 1, 
and so on. The length of a String is the number of elements (i.e., 16-bit values) within it. The empty String has 
length zero and therefore contains no elements. 
*/


// https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html