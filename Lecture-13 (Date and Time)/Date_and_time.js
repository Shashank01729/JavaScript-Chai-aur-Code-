// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

/*
JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds since the midnight at 
the beginning of January 1, 1970, UTC (the epoch).
*/

/* 
Note: TC39 is working on Temporal, a new Date/Time API. Read more about it on the Igalia blog. 
It is not yet ready for production use!
*/

let MyDate=new Date() // date is a object in javascript
console.log(MyDate)
console.log(MyDate.toString());
console.log(MyDate.toISOString());
console.log(MyDate.toJSON());
console.log(MyDate.toLocaleString());
console.log(MyDate.toUTCString());
console.log(MyDate.toLocaleDateString());
console.log(MyDate.getTime());
console.log(MyDate.getDate());
console.log(MyDate.getFullYear());
console.log(MyDate.getMonth());
console.log(MyDate.getHours());
console.log(MyDate.getMinutes());
console.log(MyDate.getUTCMinutes());
console.log(MyDate.getMilliseconds());

let myCreateddate = new Date(2023,0,23);
console.log(myCreateddate);
console.log(myCreateddate.toString());

myCreateddate = new Date(2023,0,23,5,3);
console.log(myCreateddate.toLocaleString());

myCreateddate=new Date("14-00-2023"); //Invalid
myCreateddate=new Date("2023-01-14"); // YYYY-MM-DD
console.log(myCreateddate.toLocaleString());
myCreateddate=new Date("01-14-2023"); // DD-MM-YYYY
console.log(myCreateddate.toLocaleString());


let myTimeStamp=Date.now()
console.log(myTimeStamp); // Millisecond value from 1st Jan, 1970
console.log(myCreateddate.getTime()) // Now can compare easily from this created date

// To convert into seconds
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getMonth()+1); // Since start from 0, so end users don't get confused

// using Backticks
// `${newDate.getDate()} and the time is ${newDate.getTime()}`

/*
newDate.toLocaleString('default',{
    weekday:"long",
})
*/