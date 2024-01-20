const myNums=[1,2,3,4,5,6,7,8,9,10];

const newNums=myNums.map((num)=>num+10);
console.log(newNums);

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]

const newNums1=myNums.forEach((num)=>{return num+10});
console.log(newNums1);

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]

