const myNums=[1,2,3,4,5,6,7,8,9,10];

const newNums = myNums
                    .map((num)=>num*10)
                    .map((num)=>num+1) // This num is the value from the previous map which created an array
                    .filter((num)=>num>40);
console.log(newNums);
