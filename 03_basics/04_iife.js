// Immediately Invoked Function Expression (IIFE)

//one use to start daybase connection immediately execute

(function chai (){
    console.log(`DB CONNECTED`)
}) ();// ; -> iffe invoked but dont know where to stop, so to stop it we use iffe 

//global scope pa pollution hota hai kai barr,
//to uss polution jo variable ko hatana ka lia iffe ka use karta hai

( () => {
    console.log(`DB CONNECTED TWO`)
} ) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
} ) ("Ayush");