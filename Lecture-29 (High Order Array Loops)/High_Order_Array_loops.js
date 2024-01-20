// for of loop
/* 
Strings inside array ["","",""]
Objects inside array [{},{},{}]
*/


/*
for (const iterator of object){
    
}
Here objects means on which thing you want to use loop
*/

// Using for of loop on arrays
const arr=[1,2,3,4,5]
for(const iterator of arr){
    console.log(iterator);
}


// Using for of loop on  strings
const greetings="Hey Fellas, Shashank Here!"
for(const greets of greetings){
    if(greets===" "){
        continue;
    }
    console.log(`Each Character is ${greets}`);
}


// Maps - Unique values and maintains order
const map=new Map();
map.set('In', 'India');
map.set('fr','France');
map.set('USA','United States of America');
map.set('In', 'India');
console.log(map);


// Using for of loop on maps
for(const key of map){
    console.log(key); // gives all key value pair in form of array
}
// So to get individual values for both key and value we can do this
for(const [key,val] of map){
    console.log(key,':-',val);
}


// Using for of loop on objects
const myObject={
    'game1':'NFS',
    'game2':'SpiderMan'
}

// for(const [key,val] of myObject){
//     console.log(key,':-',val);
// }
// myObject is not iterable

const languages={
    js:'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

// We use for in loop
for(const key in languages){
    console.log(key);
}

for(const key in languages){
    console.log(`${key} shortcut is for ${languages[key]}`);
}


// Can we use for in loop on arrays?
const MC=["Ayanokouji", "Hachiman", "Yuji"]
for(const i in MC){
    console.log(i);
}
/*
0
1
2
We ae getting the keys of the arrays, like objects arrays also have keys but it is by default numbers unlike objects
*/


// Using for in loop in maps
for(const key in map){
    console.log(key);
}
// Nothings prints since maps are not iteratable


const coding=["js","ruby","java","python","cpp"];
console.log(coding);


// for each 
// Variation-1
coding.forEach(function(item){
    console.log(item);
}); 
// Give a callback function, what we want to do
// Since callback function don't have a name, so remove the name of the function


// Variation-2 (Basic callback function)
coding.forEach( (item) => {
    console.log(item);
}); 

function printMe(item){
    console.log(item);
}

coding.forEach(printMe); // Don't execute the function, only give the refernce


// forEach takes item, index, array
coding.forEach( (item,index,arr) => {
    console.log(item,index,arr);
}); 


const myCoding=[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    
    {
        languageName: "java",
        languageFileName: "java"
    },

    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item);
});

myCoding.forEach((item)=>{
    console.log(item.languageName);
});