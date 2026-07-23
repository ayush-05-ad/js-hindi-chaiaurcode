//arrow function come in 2015, with js update es6

//this keyword tells about current context


//this function print the current context means current value.
const user = {
    username: "Ayush",
    price: 999,
    welcomeMessage : function() {
        console.log(`${this.username} , welocome to website`)
        console .log(this)//give current context
    }
    
}

//user.welcomeMessage() //o/p:Ayush , welocome to website
user.username = "sam"
//user.welcomeMessage() //o/p:sam, welcome to website


console .log(this) // o/p: {} (because we are in current node environment)

//node, dino, bun are js run engine

//Ask in interview => when js run on browser , it is window object

function chai () {
    let username = "Ayush"
    console.log(this.username)//it give undefined, this work only with object not with function
}

chai ()

const chai1 = function () {
    let username = "Ayush"
    console.log(this.username)//it give undefined, this work only with object not with function

}

chai1 ()

//Arrow function
const chai2 = () => {
    let username = "Ayush"
    console.log(this.username)//it give undefined, this work only with object not with function

}

chai2 ()

//Arrow function syntax -> () => {}
//explicit return => use of return statement
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3, 4))//o/p: 7

//implicit return -> agar arrow function ek line ma likha jata hai to ham log return statement and bracket ka use nahi kara ga
const addTwo1 = (num1, num2) => num1 + num2

const addTwo2 = (num1, num2) => (num1 + num2)

console.log(addTwo1(3, 4))//o/p: 7
console.log(addTwo2(3, 4))//o/p: 7

//if we rape function content in paranthesis '()' then , return statement is not mendtory
//if we rape function content in curly braces '{}' then , return statement is mendtory

//to return object
//for object we have to rape it into curly braces
const addTwo3 = (num1, num2) => ({username: "Ayush"})

console.log(addTwo3(4,5))//o/p: { username: 'Ayush' }

