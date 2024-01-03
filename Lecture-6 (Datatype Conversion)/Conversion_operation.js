let score=5
console.log(typeof(score))

score="5"
console.log(typeof(score))

let value_in_number=Number(score) // By this it is sure that the value is converted into number
console.log(typeof(value_in_number))

let value="123abc"
console.log(typeof(value))
let changed_value=Number(value)
console.log(typeof(changed_value))
console.log(changed_value) // NaN -> Not a number

let second_value=null
let changed_second_value=Number(second_value)
console.log(changed_second_value) // 0

let third_value=undefined
let changed_third_value=Number(third_value)
console.log(changed_third_value) // NaN

let flag=true
let changed_flag=Number(flag)
console.log(changed_flag) // 1
flag=false
changed_flag=Number(flag)
console.log(changed_flag) // 0

let First_name="Shashank"
let changed_name=Number(First_name)
console.log(changed_name) // NaN

let is_logged_in=true
let boolean_is_logged_in=Boolean(is_logged_in)
console.log(boolean_is_logged_in)

is_logged_in=""
boolean_is_logged_in=Boolean(is_logged_in)
console.log(boolean_is_logged_in)

is_logged_in="Shashank"
boolean_is_logged_in=Boolean(is_logged_in)
console.log(boolean_is_logged_in)

is_logged_in=2
boolean_is_logged_in=Boolean(is_logged_in)
console.log(boolean_is_logged_in)

let someNumber=10
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof(stringNumber))