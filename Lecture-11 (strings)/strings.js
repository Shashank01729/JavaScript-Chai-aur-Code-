console.log("Hello "+"World")

const First_Name="Shashank"
const Middle_Name=" Kumar"
const Last_Name=" Pandey"
console.log(First_Name+Middle_Name+Last_Name)

const repoCount=35
console.log(First_Name+repoCount+" Value") // Outdated Syntax

// Use backticks
console.log(`Hey Fellas, ${First_Name} Here! My repo count is ${repoCount}`)

const gameName=new String('Shashank')
console.table(gameName) // Not an array, it is a object (key value pairs)
console.table([gameName,repoCount])
console.log(gameName[0])
console.log(gameName.__proto__) // We get an object {}, can see in console


console.log(gameName.length)
console.log(gameName.toLowerCase)
console.log(gameName.toLowerCase()) 
console.log(gameName.toUpperCase)
console.log(gameName.toUpperCase()) // No change in the original string, stack heap concept
console.log(gameName.charAt(2)) // Character at that position
console.log(gameName.indexOf('h')) // Index of that character, first occurance


const Name=new String("Shashank-Kumar-Pandey")
const newString=gameName.substring(1,5) // Last value is not included
console.log(newString)
const newString2=gameName.substring(1,9)
console.log(newString2)
const newString3=gameName.substring(9,12)
console.log(newString3)


const place=new String("UttarPradesh")
const place1=place.slice(1,4) // tta
console.log(place1)
// In slice we can also give -ve values
const place2=place.slice(-9,8) // arPra
console.log(place2)
const place3=place.slice(-1,4)
console.log(place3)

// If given -ve values in substring, it will not obey and start from 0
const place4=place.substring(-4,4)
console.log(place4)


// To remove extraspaces, used in form
const newString1 = "  Shashank  "
console.log(newString1)
const trimmedString=newString1.trim() // Remove spaces from both ends
console.log(trimmedString)

const leftSpaces="  Hey"
const trimmedLeftString=leftSpaces.trimStart() // Remove spaces from left end
console.log(trimmedLeftString)

const rightSpaces="Hey  "
const trimmedRightString=rightSpaces.trimEnd() // Remove spaces from right end
console.log(trimmedRightString)

/* 
A new string representing str stripped of whitespace from both its beginning and end. 
Whitespace is defined as white space characters plus line terminators.

If neither the beginning or end of str has any whitespace, a new string is still returned 
(essentially a copy of str).
*/

const url="https://Shashank.com/shashank%10pandey" // make it usable
console.log(url.replace('%10','-')) // Returns a copy
console.log(url)
// replace(<to be replaced>,<by whom>)

console.log(url.includes('Shashank')) // true
console.log(url.includes('Muskan')) // false


// To convert string into an array, based on something
// Separating by dash 
const cities="Lucknow-Delhi-Mumbai-Kanpur"
console.log(cities.split('-')) // [ 'Lucknow', 'Delhi', 'Mumbai', 'Kanpur' ]
const a=cities.split('-')
a[0]="Ghazipur" 
console.log(a)
// a=[1,2,3,4] 
// console.log(a)
b=[1,2,3,4]
console.log(b)


const LastName=new String("Pandey")
console.log(LastName)
const MiddleName="Pandey"
console.log(MiddleName.bold())