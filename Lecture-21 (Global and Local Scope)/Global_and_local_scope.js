// let a=10;
// const b=20;
// var c=30;
// console.table([a,b,c]);

if(true){
    let a=10;
    const b=20;
    var c=30;
}

// console.log(a); // Giving error, no problem
// console.log(b); // Giving error, no problem
console.log(c); // 30 gets printed outside, that's why don't use var



var d=300
if(true){
    d=30;
}
console.log(d); // Changed

// {} => Block Scope
// Anything outside => Global Scope


let e=100;
if(true){
    let e=200;
    console.log(`INNER: ${e}`);
}
console.log(`OUTER: ${e}`);

// Inside console in browser global scope is different and when run on code environment it is different (For interview)