const course = {
    coursename: "Maths",
    price: "99",
    courseInstructor: "Shashank"
}

// console.log(course.courseInstructor);

// Another way
const {courseInstructor} = course
console.log(courseInstructor);

// De-structuring value
const {courseInstructor:instructor} = course
console.log(instructor);


// In react
/*
const navbar = ({company}) => {

}

navbar(company="shashank")
*/

// We can also de structure arrays


// ******************** API  ********************
// At starting we got value in xml format, now we get it in json format

/*
{
    name: "Shashank",
    courseName: "Physics",
    price: "free"
}
*/

// Sometimes we get api's in the form of arrays
[
    {},
    {},
    {}
]


// https://randomuser.me/
// https://randomuser.me/api/
/*
{
    {"results":[{"gender":"male","name":{"title":"Monsieur","first":"Rico","last":"David"},"location":{"street":{"number":4410,"name":"Grande Rue"},"city":"Oberthal","state":"Ticino","country":"Switzerland","postcode":7549,"coordinates":{"latitude":"-58.8189","longitude":"-139.5846"},"timezone":{"offset":"-10:00","description":"Hawaii"}},"email":"rico.david@example.com","login":{"uuid":"d2172ac5-3a15-4765-a155-2640be616d4a","username":"goldengoose248","password":"almond","salt":"oPhuDyv5","md5":"48584d5c228d23c1ccb9edb6d04c8876","sha1":"aee40e61b0dd48841f2e81dc0d904faf1c0831ce","sha256":"61fe0ca2b9852319a363b5247a64608eae884c3e452037fc9ba8c78249f47ea5"},"dob":{"date":"1966-06-28T15:21:19.693Z","age":57},"registered":{"date":"2007-11-13T03:28:59.479Z","age":16},"phone":"079 414 82 65","cell":"079 447 55 49","id":{"name":"AVS","value":"756.9858.2650.16"},"picture":{"large":"https://randomuser.me/api/portraits/men/3.jpg","medium":"https://randomuser.me/api/portraits/med/men/3.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/3.jpg"},"nat":"CH"}],"info":{"seed":"0c0826b4e843a6a1","results":1,"page":1,"version":"1.4"}}
*/
// To understand this we have many tools, like json formatter
// https://jsonformatter.org/
// Paste the result in the json formatter
// Format/Beautify it
// Now we can convert it into many forms, to our comfort