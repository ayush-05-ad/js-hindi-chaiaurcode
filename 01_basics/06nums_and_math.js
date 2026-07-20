const score = 400 //This is simple and easy pattern
console.log(score)//o/p: 400

//it define the dataType and give the output
const balance = new Number(100) // explicitlt by default it give only number
console.log(balance) //o/p :[number: 100]

console.log(balance.toString())//o/p: 100 (it becomes String)

//(string property is applied and it give the string length)
console.log(balance.toString().length)// o/p : 3

//it fixted the value place after decimal 
//it is use in e commerce aur where calculation is use
//it is use to fixed precision value
console.log(balance.toFixed(2))//o/p: 100.00

const otherNumber =123.8966

console.log(otherNumber)//o/p: 123.8966

//it give pricise value after the number which given after it
console.log(otherNumber.toPrecision(4))//o/p: 123.9

const hundereds = 1000000

//it give the number in by default us formate and 
// seprate the number by comma.
console.log(hundereds.toLocaleString())//o/p: 1,000,000

//it give the number in by default indian formate and
// seprate the number by comma.
console.log(hundereds.toLocaleString('en-IN'));//o/p: 10,00,000

//++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++
//Math is a built-in object that has properties and methods for mathematical constants and functions. 
//It’s not a function object.
//it come by default in js.


console.log(Math); //o/p: [Math: Math] { [Symbol(Symbol.toStringTag)]: 'Math' }

//convert the number into absolute value 
//it is use to convert the negative number into positive number
console.log(Math.abs(-5)); // o/p: 5


//mostly it is use to round the number into next value
//it is use frequently in e-commerce aur where calculation is use
console.log(Math.round(4.7)); //o/p: 5

//it round the number into next value
console.log(Math.ceil(4.1)); //o/p: 5


//it round the number into previous value
console.log(Math.floor(4.9)); //o/p: 4

console.log(Math.min(1, 2, 3, 4, 5)); //o/p: 1

console.log(Math.max(1, 2, 3, 4, 5)); //o/p: 5

//Main use Math library is to generate random number
//it give the random number between 0 to 1
console.log(Math.random()); //o/p: 0.123456789 (random number)

//it give the random number between 0 to 10
console.log(Math.floor(Math.random() * 10)); //o/p: 7 (random number)

//it give the random number between 1 to 10
console.log((Math.random() * 10) + 1) //o/p: 3.0567356 (random number)
console.log(Math.floor(Math.random() * 10) + 1) //o/p: 3 (random number)

//trick to define min and max value for random number
const min = 10
const max = 20

//it give the random number between 10 to 20
//it is use to generate the random number between min and max value
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //o/p: 15 (random number)


// it is use to calculate the power of number
console.log(Math.pow(2, 3)); //o/p: 8