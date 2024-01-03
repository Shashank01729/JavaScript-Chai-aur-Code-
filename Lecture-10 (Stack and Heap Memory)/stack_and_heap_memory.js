/* 
STACK AND HEAP

    STACK(Used in Primitive):
        Whenever stack is used, if a variable is declared then we get a copy of it 

    HEAP(Used in Non-Primitive):
        Whenever heap is used, we get the reference to the original value
*/

let My_Name="Shashank" // Primitive type, So will go in stack
let Another_Name=My_Name
Another_Name="Muskan"
console.log(My_Name)
console.log(Another_Name)


// Non_primitive type, Goes in heap, don;'t get copy, instead get original value reference
let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2=user1 // Now if we make changes in the user2, user1 will get changed
user2.email="shashank@gmail.com"
console.log(user1.email)
console.log(user2.email)