// ******************** Operations ********************
let value=3
let neg_value=-value
console.log(neg_value)
console.log(2+2)
console.log(2-2)
console.log(2/3)
console.log(2*2)
console.log(2**2)
console.log(2%3)

let str1="Hey Fellas, "
let str2="Shashank Here!"
let str3=str1+str2
console.log(str3)

console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1"+"2") // 12
console.log("1"+2+2) // 122, instead of 14
console.log(2+2+"1"+3) // 413, instead of 2213
console.log(2+"2"+"1"+3) // 2213

console.log(true) // true
console.log(+true) // +1
console.log(-true) // -1

console.log(+"") // 0
console.log(-"") // -0

// let num1, num2, num3
// num1=num2=num3=2+2

let game_counter=100
game_counter++
console.log(game_counter) // 101

game_counter=100
++game_counter
console.log(game_counter) // 101

game_counter=100
console.log(game_counter++) // 100, postfix

game_counter=100
console.log(++game_counter) // 101, prefix

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion