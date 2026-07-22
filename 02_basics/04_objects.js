//const tinderUser = new Object() // this is singilton object
const tinderUser ={} // this is not singilton object


console.log(tinderUser)// o/p: {}

tinderUser.id = "123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);//o/p: { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: {
            firstname: "Ayush",
            lastname: "Deep"
        }
    }
}

console.log(regularUser.fullname);// o/p: { userfullname: { firstname: 'Ayush', lastname: 'Deep' } }
console.log(regularUser.fullname.userfullname);// o/p: { firstname: 'Ayush', lastname: 'Deep' }
console.log(regularUser.fullname.userfullname.firstname);// o/p: Ayush


//combining/merging of array
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
// it has same problem like array wher array is inside array, here is also same object inside object
console.log(obj3) //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//The "Object.assign()" static method copies all enumerable own properties from one or more source object to a target object.It returns modified target value 
const obj4 = Object.assign(obj1, obj2)
console.log(obj4)// o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//output will same but {}=> this is optional parameter, giving this is good practice
const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5)// o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj6 = {1: "a", 2: "b"}
const obj7 = {3: "a", 4: "b"}
const obj8 = {5: "a", 6: "b"}
const obj9 = Object.assign({}, obj6, obj7, obj8)
console.log(obj9); //o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//mostly we use spread
const obj10 = {...obj1, ...obj2}
console.log(obj10)//o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//how value come from datbase => comes as array of object
const users = [
    {
        id: 1,
        email: 'h@gmail.com'
    },
    {
        id: 1,
        email: 'h@gmail.com'
    },
    {
        id: 1,
        email: 'h@gmail.com'
    }
]

//inside array there is object , how we taverse it/access it
users[1].email

console.log(tinderUser);//o/p: { id: '123abc', name: 'Sammy', isLoggedIn: false }

//to get keys from object
console.log(Object.keys(tinderUser));//o/p: [ 'id', 'name', 'isLoggedIn' ] (datatype is array)

//to get value from object
console.log(Object.values(tinderUser))//o/p: [ '123abc', 'Sammy', false ] (datatype is array)

//enteries give every object key:value in form of array inside array
console.log(Object.entries(tinderUser));//o/p: [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//to check key is present in object or not to avoide programe crash , it give output in form of boolean
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //o/p: true
console.log(tinderUser.hasOwnProperty('isLogged')) //o/p: false


//+++++++++++++++++++++++de-structure and JSON API ++++++++++++++++++++++++++++++++++++++++++++++++++

//de-structuring
const course = {
    courdename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

//course.ciurseInstructor

const {courseInstructor} = course //de-structure 
const {courseInstructor : instructor} = course //de-structure, here we give our own hame 

console.log(courseInstructor) //o/p: hitesh
console.log(instructor) //o/p: hitesh


//in react in props , (only for edu. purpose)
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")

//API => vale come from backend in form of json


// json mainly look like this, json key and value both are form of string
// {
//     "name": hitesh,
//     "coursename": "js in hindi",
//     "price": "free"
// }

//some api in form of array
// [
//     {},
//     {},
//     {}
// ]

//study => random user api
//api data to jason formator to api to get object

