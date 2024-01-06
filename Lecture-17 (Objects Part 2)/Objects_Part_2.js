const tinderuser=new Object() // Singleton Object
console.log(tinderuser);

const tinderUser={} // Non Singleton Object
tinderUser.id="12217166"
tinderUser.name="Shashank"
tinderUser.isLoggedIn=false
console.log(tinderUser);

const regularUser={
    email: "shashank@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shashank",
            middlename: "Kumar",
            lastname: "Pandey"
        }
    }
}

console.log(regularUser.email);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname?.userfullname.firstname);
// Used ? for protection because if we get response from an api and if the value didn't came then it could handle 


const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}

const obj3={obj1,obj2} // object inside object
console.log(obj3);

const obj4={...obj1, ...obj2} // Using spread operator
console.log(obj4);

const obj5=Object.assign(obj1,obj2) // Object.assign() is a static method
console.log(obj5);

const obj6=Object.assign({},obj1,obj2) // {} => target, and others are source
console.log(obj6);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }
console.log(returnedTarget === target);
// Expected output: true


// If we get value from database then we get arrays of objects

const users = [
    {
        id: 1,
        email: "Shashank@gmail.com"
    },
    {
        id: 2,
        email: "Devnath@gmail.com"
    },
    {
        id: 3,
        email: "Muskan@gmail.com"
    },
    {
        id: 4,
        email: "Riya@gmail.com"
    },
]
console.log(users[0].email);
console.log(users[2].id);


console.log(tinderUser);
console.log(Object.keys(tinderUser)); // Datatype: array
console.log(Object.values(tinderUser)); // Datatype: array
console.log(Object.entries(tinderUser));
/* 
[
  [ 'id', '12217166' ],
  [ 'name', 'Shashank' ],
  [ 'isLoggedIn', false ]
]
*/
// key value kept in a array, then all the array of key value are kept in a single array


// Sometimes we loop through a object, and we are taking out values. Sometimes that value doesn't exits, so it can crash
// So to solve this problem we ask the objects if it has that specific value or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

// For more important methods we can go to console and go to prototype