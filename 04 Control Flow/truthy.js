// false values 
// false 0 -0 BigInt 0n "" null undefined NaN

// true values 
// "0" 'false' " " [] {} function(){} 

// const emptyObj = {}

// if (Object.keys(emptyObj)) {
//     console.log('Object empty')
// }

// Nullish Coalescing Operator (??)

// let val1;
// // val1 = 5 ?? 10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20


// console.log(val1)

// Ternary Operator
// condition ? true 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log('less than 80') : console.log('more than 80')