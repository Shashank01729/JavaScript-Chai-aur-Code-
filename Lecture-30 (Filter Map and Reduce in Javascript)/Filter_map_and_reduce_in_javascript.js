const coding=["js","ruby","java","python","cpp"];
console.log(coding);

const values=coding.forEach((item)=>{
    console.log(item);
});

console.log(values); // It will give undefined, can't return the value


const myNums=[1,2,3,4,5,6,7,8,9,10];
const newNums=myNums.filter((num)=>num>4); // It also takes a callback
// forEach doesn't return the value but filter does
console.log(newNums);

/* 
const newNums=myNums.filter((num)=>num>4); -> it will work
const newNums=myNums.filter((num)=>(num>4)); -> it will work
const newNums=myNums.filter((num)=>{num>4}); -> will not work due to object passing, it will return [], since we started a scope

// To use like this we return the value
const newNums=myNums.filter((num)=>{return num>4});
*/


// Using same in forEach
const newNums1=[];
myNums.forEach((num,index)=>{
    newNums1[index]=num;
});
console.log(newNums1);


const newNums2=[];
myNums.forEach((num)=>{
    if(num>4){
        newNums2.push(num);
    }
});
console.log(newNums2);


// Using filters
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks=books.filter((bk)=>bk.genre==='History');
console.log(userBooks);

userBooks=books.filter((bk)=>{ return bk.publish>=1995});
console.log(userBooks);

userBooks=books.filter((bk)=>{ return bk.publish>=1995 && bk.genre==='History'});
console.log(userBooks);