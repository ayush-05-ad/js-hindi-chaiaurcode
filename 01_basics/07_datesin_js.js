//JavaScript Date Object represents a singlr moment in time in a platform-independent format. 
//Date Object contains a Number that represents milliseconds since 1 January 1970 UTC. It is use to work with date and time in JavaScript.


//old method to get gmt universal time
let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)//o/p: object

//to create date by own
//Month in javaScript is start with 0
let myCreatedDate = new Date(2023, 0, 23)//o/p:Mon Jan 23 2023
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)//o/p: 1/23/2023, 5:03:00 AM
console.log(myCreatedDate1.toLocaleString());

//this in form of yyyy-mm-dd formate
//In this formate month start wit 01 not with 00
//but this syntax is not mostly followed in India
let myCreatedDate2 = new Date("2025-01-26")//o/p: 1/26/2025, 12:00:00 AM
console.log(myCreatedDate2.toLocaleString());

//This is MM-DD-YYYY format which is use in India.
let myCreatedDate3 = new Date("01-23-2026")
console.log(myCreatedDate3.toLocaleString())//o/p: 1/23/2026, 12:00:00 AM

let myTimeStamp = Date.now()

//we get time in form of millisecond
//it is use in poll, booking hotels to get real time of action performed.
console.log(myTimeStamp);//o/p: 1784577698365
console.log(myCreatedDate.getTime());//o/p: 1784577698365

//to convert into second 
//if to compare the two value do it in millisecond
//This is mostly asked in Interview
console.log(Math.floor(Date.now()/1000));//o/p: 1784578070

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
//here month start with 0 so,we add +1 so month start with 01.
console.log(newDate.getMonth()+1);

//string interpolation (means string inside backtits ( ``))
// `${newDate.getDay()} and the time`


//ctrl+space = give all the properties in vs code
newDate.toLocaleString('default',{
    weekday: "long",
})


//Time and Date is very complex Topic , It required more practice and efforts


// //it is use to get the current date and time
// const now = new Date()
// console.log(now) //o/p: 2024-06-19T10:30:00.000Z (current date and time)

// //it is use to get the current date
// const today = new Date().toDateString()
// console.log(today) //o/p: Wed Jun 19 2024 (current date)

// //it is use to get the current time
// const time = new Date().toTimeString()
// console.log(time) //o/p: 10:30:00 GMT+0000 (Coordinated Universal Time) (current time)