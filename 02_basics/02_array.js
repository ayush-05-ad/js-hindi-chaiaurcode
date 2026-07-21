//it is importsnt for react and next js

const marval_heros =["thor", "Ironman", "spiderman"]
const dc_heros =["superman", "flash", "batman"]

marval_heros.push(dc_heros) // it not merge the array, instide of this it give array inside array , which is problem
console.log(marval_heros) //o/p: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//indexing: [0]:'thor', [1]:'Ironman', [2]:'spiderman', [3][0]:'superman', [3][1]:'flash', [3][2]:'batman'

console.log(marval_heros[3][1]) // o/p: flash {This not a good syntax to do so.}


const marval_heros1 =["thor", "Ironman", "spiderman"]
const dc_heros1 =["superman", "flash", "batman"]

//concat is use to combien the two array and return new array.
const allHeros = marval_heros1.concat(dc_heros1) 
console.log(allHeros); //o/p: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const marval_heros3 =["thor", "Ironman", "spiderman"]
const dc_heros3 =["superman", "flash", "batman"]

//spread best method to do show
//ex to learn spread by drop glass and way it spread after broke.
//also here we spread two and more than two arrays

const all_new_heros = [...marval_heros3, ...dc_heros3]
console.log(all_new_heros); //o/p: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]


//flat is to convert array inside array into the depth in single array or spread out 
const real_another_array = another_array.flat(Infinity) // infinity is not good practice, instede of this we give depth to flat
console.log(real_another_array);//o/p:[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// when we scrape data from from other website, but it give data in any formate but we want it into array so we do this,
console.log(Array.isArray("Ayush")) //o/p: false (because not array)
console.log(Array.from("Ayush")) //o/p: [ 'A', 'y', 'u', 's', 'h' ]  (convert into array)


//interesting case for interview
console.log(Array.from({name: "Ayush"})) //o/p: []  (if not able to convert, so it give empty array , here we have to define which value key or value is to be converted to array)


let score1 = 100
let score2 = 200
let score3 = 300

//situation: To conert variable into array
console.log(Array.of(score1, score2, score3)) //o/p:[ 100, 200, 300 ] (convert no. of element into single array)

// must study Array.isArray, Array.from, Array.of