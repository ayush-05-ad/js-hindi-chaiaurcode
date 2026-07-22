function sayMyName (){
    console.log("ayush")
}

sayMyName()

//Add two number
//input take in function called parameter (eg: number1, number2)
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

addTwoNumbers() //o/p: NaN (if we don't pass an argument)
//the value we pass during function call is argument (eg: 3, 7) 
addTwoNumbers(3, 4) //o/p: 7
addTwoNumbers(3, "4") //0/p: 34

const result = addTwoNumbers(3, 5) 

console.log("Result: ", result);//o/p: undefined (here function dont return the value)

function addTwoNumbers1(number1, number2){
    let result = number1 + number2;
    return result
    console.log("Ayush") // it don't print because function don't execute after return
    //another way to do so
    //return number1 + number2
}

const result1 = addTwoNumbers1(4,5)

console.log("Result1: ", result1);//o/p: 9


function loginUserMessage(username) {
    return `${username} just logged in.`
}

loginUserMessage("Ayush") //here nothing print , because it return
console.log(loginUserMessage("Ayush"))// o/p: Ayush just logged in.

//Ask in interviewed, if we dont passed the valued. it gived undefined
console.log(loginUserMessage())//o/p: undefined just logged in.


function loginUserMessage1(username) {
    if(username === undefined){
       console.log("please enter a username");
       return 
    }
    return `${username} just logged in.`
}

//profersional way (mostly seen in react, react native)
//in js we let undefined is false value

function loginUserMessage2(username) {
    if(!undefined){
       console.log("please enter a username");
       return 
    }
    return `${username} just logged in.`
}

//giving default value

function loginUserMessage3(username = "sam") {
    //this is not use, because undefined case cattered
    // if(!undefined){ 
    //    console.log("please enter a username");
    //    return 
    // }
    return `${username} just logged in.`
}


//project shoping cart , where we dont known how many argument will we come 
//to solve this we use rest operator (...argumentName)
//rest operator give output in form of array

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 200))//o/p: [ 200, 400, 500, 200 ]


//ask in interview that what is the value
function calculateCartPrice1(val1, val2, ...num1){
    return num1
}

//here, val1= 200, val2 = 400 and rest in given form of array
console.log(calculateCartPrice1(200, 400, 500, 2000))//o/p: [500, 2000 ]

const user = {
    username: "ayush",
    price: 199
}

//taking object as argument in function
//type safety is imp.
function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`)
}

//here we have to complesury to pass object
//method 1 passing object as a parameter
handleObject(user) //o/p: user name is ayush and price is 199
//method 2 passing object as a parameter
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

//method 1 passing array as a parameter
console.log(returnSecondValue(myNewArray))//o/p: 400
//method 2 passing array as a parameter
console.log(returnSecondValue([200, 100, 500, 1000]))//o/p:100