//Scnerio: Let we try to make an ecommerce website, 
//let we bring an user to our website and fill the registration form.
//We give unique id in this (this is thinking) to make.
//How we score data in memory is main thing is basically to store and optimizely use it.
//Variable (var) : It may or may not be change 
//Constant (const) : Once it declared not changes

//For registration of user

//to run file  in node => node fileName

const accountId = 1444555
let accountEmail ="ayush@google.com"
var accountPassword = "12345"
accuntCity = "Jaipur"

//const value do not change once it define
// => use for comment

//accountId = 2 //(give error) account id do not cange becaust it is const
console.log(accountId); // to print (o/p: 1444555)

accountEmail = "hc@hc.com"
accountPassword ="21212121"
accountCity = "Bengaluru"

//To print multiple value and the argument to print in form of array.
console.table([accountId, accountEmail, accountPassword, accountCity])
/*
--------------------------
│ (index) │ Values      │
├─────────┼─────────────┤
│ 0       │ 1444555     │
│ 1       │ 'hc@hc.com' │
│ 2       │ '21212121'  │
│ 3       │ 'Bengaluru' |
------------------------- 
*/

//In javaScript there is only one method to declared constant => 'const'

//But to decalared variable there is two method 1. let and 2. var

// But we avoide to use var in every day js as problem to recoznize the scope {} (curly braces ) not work on scope

//let keyword solved the problem of scope problem of JS.
//But in old code var use is use.

/*
=> multi-line comment
*/ 

/*
Prefer not to use Var because of issue in block scope & functional scope
*/

/*
we can declared memory in js without written only things
before it, but it is not preferable :
ex : accountCity = "Jaipur"
(This way is not useful and good to declared)

One Sceniro: 
we have to take accountState also 
let accountState;
(in js it not menditory to give semicolon, it depends upon user)


Readability of code is very important in programming and future scope

*/

let accountState; 
console.log(accountState)//o/p : undefined

// if we declared varible and not put the value in it then it give "undefined"