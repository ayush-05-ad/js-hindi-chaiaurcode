//global scope
let a = 10
const b = 20
var c = 30

//{} => scope , if it come with function, if-else then we say it scope of programe

//block scope
if(true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(a)//o/p: error
console.log(b)//o/p: error
console.log(c)//o/p: 30 (which is problem it dont recozinize scope, that why we don't use var)

let a1 = 300 //global scope
if(true) {
    let a1 = 10//block scope
    const b1 = 20
    console.log("INNER: ", a)//o/p: INNER: 10
}

console.log(a1)//o/p: 300

//node ka andar aur console browser ka andar global scope alag hai


//nested function => here child function can access parent variable
function one() { //parent function
    const username ="Ayush" // here this is global scope for one ()

    function two(){ //child function
        const website = "youtube"// here this is local scope for two()
        console.log(username) //o/p: Ayush
    }
    //console.log(website) //o/p:error

    two()
}

one ()

//job bhi ham function ko call karta hai to call stack banta hai (scope)

//child can access parent variable
if(true){ //parent
    const username = "Ayush" //global scope inside scope
    if(username === "Ayush"){ //child
        const website = " youtube" //local scope
        console.log(username + website)//o.p: Ayush youtube
    }
    //console.log(website)//o/p: error (1st error)
}

//console.log(username)//o/p: error (it try to access out of scope variable) (2nd error)


//+++++++++++++++++++++++++++++++interesting +++++++++++++++++++++++++++++++++++++++++
console.log(addone(5)) //o/p: 6
function addone(num){
    return num + 1
}


//addTwo(5) //o/p: it give error (if we hold function inside the variable)

//in js variable is very powerfull it can hold any value
const addTwo = function(num){
    return num + 2
}

addTwo(5)
