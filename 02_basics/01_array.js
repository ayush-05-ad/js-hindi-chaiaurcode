// Array basics in JavaScript

// TheArray is an object that can hold multiple values in a single variable. 
// It is a collection of elements, which can be of any type, including numbers, strings, objects, and even other arrays. 
// Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

//similiar type elements
const myArr= [0, 1, 2, 3, 4, 5]

console.log(myArr[2]);

//Ask in interview
//SHALLOW COPY
//When we do copy in array it do Shallow Copy
//Shallow copy of an object is a copy whose properties 
//share the same reference(point to the same underlying values)
//if we change in copy array then it also change in original array


//DEEP COPY
//Deep Copy of an object is a copy whose properties do not share the same reference 
//(point to the same underlying values)
//if we change in deep copy then it do not cange in original copy but ,
//it create new copy and then change it

//Array can be declared by many ways
const myArr1 =[0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", " naagraj"]

const myArr2 =new Array(1, 2, 3, 4)
console.log(myArr[0]);

//Array Methods

//push is to add element to last of the array
myArr.push(6)
console.log(myArr);//o/p: [0, 1, 2, 3, 4, 5, 6]

myArr.push(7)
console.log(myArr);//o/p: [0, 1, 2, 3, 4, 5, 6, 7]


//pop is use to remove the last element from array and we do pass the argument into this
myArr.pop()
console.log(myArr);//o/p: [0, 1, 2, 3, 4, 5, 6]


//unshift is not very popular metod in array it increase the lode by shifting of the array
//In unshift we add the element in the starting of the array 
//it is in todo list making and .... many more but it is very inefficient
myArr.unshift(9)
console.log(myArr);//o/p: [9, 0, 1, 2, 3, 4, 5, 6]

//in shift we removed the element from the starting from the array
myArr.shift(9)
console.log(myArr);//o/p: [0, 1, 2, 3, 4, 5, 6]

//.include is use check either value is presrnt or not present in array
//if present then it give => true , if not present then it give => false 
console.log(myArr.includes(9))//O/p: false (data type is imp. in comperision)
 
//it give index of element where it present ,
//if element array present more than one place , then it give first place of occurance
console.log(myArr.indexOf(9))//o/p: -1 (it gives -1 if element is not present in array)
console.log(myArr.indexOf(4))//o/p: 4 (if present then give the index where it present)


const newArr = myArr.join()

//it is use join the array and change the data type to string
console.log(myArr)//o/p: [0, 1, 2, 3, 4, 5, 6]
console.log(newArr)//o/p: 0,1,2,3,4,5,6
console.log(typeof newArr);//o/p: string


// slice, splioe

console.log("A ", myArr);//o/p : A [0, 1, 2, 3, 4, 5, 6]

const myn1 = myArr.slice(1, 3)// it give the value without changing/manipulating value also not include last value 

console.log(myn1);//o/p : [1, 2]
console.log("B ",myArr);//o/p:B [0, 1, 2, 3, 4, 5, 6]

const myn2 = myArr.splice(1, 3) // it give the and manipulating the original array by removing that value and also include last element

console.log("C ",myArr);//o/p: [0, 4, 5, 6]
console.log(myn2);//o/p: [1, 2, 3]



//--------------------------------------------------------------------------------------------

// const fruits = ["apple", "banana", "mango"];
// console.log("fruits:", fruits); // [ 'apple', 'banana', 'mango' ]
// console.log("length:", fruits.length); // 3
// console.log("first:", fruits[0]); // apple
// console.log("last:", fruits[fruits.length - 1]); // mango

// fruits.push("orange");
// console.log("after push:", fruits); // [ 'apple', 'banana', 'mango', 'orange' ]

// const removed = fruits.pop();
// console.log("popped:", removed); // orange
// console.log("after pop:", fruits); // [ 'apple', 'banana', 'mango' ]

// fruits.unshift("kiwi");
// console.log("after unshift:", fruits); // [ 'kiwi', 'apple', 'banana', 'mango' ]

// const sliced = fruits.slice(1, 3);
// console.log("slice(1, 3):", sliced); // [ 'apple', 'banana' ]

// const transformed = fruits.map(item => item.toUpperCase());
// console.log("map toUpperCase:", transformed); // [ 'KIWI', 'APPLE', 'BANANA', 'MANGO' ]

// const filtered = fruits.filter(item => item.length > 4);
// console.log("filter length > 4:", filtered); // [ 'kiwi', 'apple', 'banana', 'mango' ]

// const hasBanana = fruits.includes("banana");
// console.log("includes banana:", hasBanana); // true
