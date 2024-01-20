const myNums=[1,2,3,4,5,6,7,8,9,10]
const mySum=myNums.reduce(function(accumulator,curr_val){
    console.log(`AC: ${accumulator}, CV ${curr_val}`);
    return accumulator+curr_val;
},0); // 0 given to tell the accumulator where to start from, so starting value of accumulator is 0
console.log(mySum);


// Using arrow function
// const myTotal = myNums.reduce(() => {},0);
const myTotal=myNums.reduce((ac,curr) => ac+curr,0);
console.log(myTotal);


// Add all the price in the shopping cart
const shoppingCart=[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 5999
    },
    {
        itemName: "Mobile dev course",
        price: 2999
    },
    {
        itemName: "data Science course",
        price: 12999
    },
]

const myCartPrice=shoppingCart
                            .reduce((acc,cv) => acc+cv.price,0);
console.log(myCartPrice);
// but after going further we will do checks for the value of the ac, if it is in numbers or not