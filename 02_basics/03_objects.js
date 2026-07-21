//To Learn JavaScript There is two important things to be learn
// 1. Object
// 2. Events (dom)

/*
Object can be declared by two ways:
1. By Literal method
2. By Constructor Method
*/

//Singleton -- means making by constructor
//if interviewer ask what is  singleton in object ?
//if we make object by literal method then singloton is not make
//the difference between literals and constructer method is that
//constructor make singloton but literals don't.

//Object Constructor

Object.create  // object is created by constructor

//Object literals -- way to declared object

//declaration of symbol data type
//Ask in interview 
//Take a symbol use a key in object and prient it and datatype is also symbol
const mySym = Symbol("key1")

//object is created by literals
//object declared by key:value , system take  key as string
const JsUser = {
    name: "Ayush",
    "full name": "Ayush Deep",
    //mySum: "myKey1" (not use as symbol , but as string)
    [mySym]: "mykey1",
    age: 18,
    location: "Noida",
    email: "ayush@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

//Ways to access object
//1. by .operator
//2. by [] bracket (pass key as string because key is string in object)

console.log(JsUser.email)// o/p: ayush@google.com (mostly by dot opretor)
console.log(JsUser["email"])// o/p: ayush@google.com (but in some special case or ask in interview)
console.log(JsUser["full name"])// o/p: Ayush Deep
//console.log(JSUser.full name ) (give error)
console.log(JsUser[mySym])//o/p: it use as symbol

//to change the existing value
JsUser.email= "ayush@chatgpt.com"

//if we want to donot change the value, Then we freeze it
// Object.freeze(JsUser)
// JsUser.email= "ayush@microsoft.com" // it not give error but changes do not occur
// console.log(JsUser) //changes occur at emai to chatgpt but microsoft not occur

//in js if we want we can treate function as a variable

JsUser.greeting = function(){
    console.log("Hello js User")
}

console.log(JsUser.greeting) //o/p: [Function (anonymous)] (undefined)
console.log(JsUser.greeting()) //o/p: Hello js User

JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`)
}

console.log(JsUser.greetingTwo())//o/p: Hello js User, Ayush