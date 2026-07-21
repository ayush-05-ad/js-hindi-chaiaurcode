console.log(2 > 1)//o/p: true
console.log(2 >= 1)//o/p: true
console.log(2 < 1)//o/p: false
console.log(2 == 1)//o/p: false
console.log(2 != 1)//o/p: true

console.log("2" > 1)//o/p: true
console.log("02" > 1)//o/p: true

//Note => It not recommended to compare different datatype because output may very.

//Note => TypeScript don't allow to compare two different type of datatype

console.log(null>0); //o/p: false
console.log(null==0); //o/p: false
console.log(null>=0); //o/p: true

/*
The reason is that an equility check == and >, <, >=, <=, work different
comparision convert null to a number, treating, it as 0.
That's why(3) null >= 0 is true and (1) null > 0 is false
*/

console.log(undefined == 0);//o/p => false
console.log(undefined > 0);//o/p => false
console.log(undefined < 0);//o/p => false


//== and ===

// == => it is to check value, equility and not check data type

// === => it is to check valur, equility and securely and also check data type 

//example :- console.log( 2 ==== "2") o/p: false (because data type is different)

console.log(2 === "2") //o/p: false

