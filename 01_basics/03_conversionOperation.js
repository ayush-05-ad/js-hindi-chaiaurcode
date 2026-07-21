let Score = 33
console.log(typeof Score); //o/p: number

console.log(typeof(Score)); //O/P: number (in single method)

let Score1 ="33"
console.log(typeof (Score1));//o/p: string

let valueInNumber =Number(Score1);
//it give gurentee the Score1 is number.

console.log(typeof valueInNumber)//o/p: number

let score = "123abc"
console.log(typeof score); //o/p: string
console.log(Number(score))//o/p: NaN (not a number)
//Check it before the use

//Value that convert into number
/*
"33" => 33
"33abc" => NaN
true => 1 and false => 0
"Ayush" => NaN
null => 0
undefined => undefined
*/

let isLoggedIn =1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);//o/p: true

//value to boolean 
/*
1=> true
0=> false
"" => false "Empty String give false"
"Ayush" => true
*/

let someNumber = 33

let stringNumber = String(someNumber);
console.log(stringNumber); //o/p=> 33
console.log(typeof stringNumber); //o/p => string



//+++++++++++++++++String To Number ++++++++++++++++++++++++++++

let value = 3;
let negValue = -value
console.log(negValue)//o/p: -3

//console.log(2+2) //4
//console.log(2-2) //0
//console.log(2*2) //4
//console.log(2**3) //2^3 = 8
//console.log(3 | 2); //5
//console.log(3 % 2) //it give rem => 1

let str1 = "hello"
let str2 = "Ayush"

let str3 = str1 + str2
console.log(str3); //o/p:=> 'hello Ayush'

//This is only for competaton , This is not good approach
console.log("1" + 2); //o/p : 12
console.log(1 + "2"); //o/p : 12
console.log("1" +2 +2); //o/p : 122
console.log(1 + 2+ "2"); //o/p : 32

console.log(3+4*5%3); //o/p :5
console.log((3+4)*5%3) //o/p :2 

console.log(true);//o/p: true
console.log(+true)//o/p: 1
//console.log(true+) //o/p: Error
console.log( +"")// o/p: 0 (value 0)

//This is not good practice to define variable
// let num1, num2, num3
// mum1 = num2 = num3 = 2+2 

let gameCounter = 100;
gameCounter ++;
console.log(gameCounter); //o/p: 101

let gameCounter1 = 100
++ gameCounter
console.log(gameCounter1) //o/p: 100

//link to studt
//https:// tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion