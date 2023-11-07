const myArr = [1, 4, 9, true, 'hello']

// console.log(myArr[4])

const myArr2 = new Array(1, 6, 3, 9, 2)
// console.log(myArr2[1])

// array methods
// myArr.push(7)
// myArr.push(41)
// myArr.pop()
// myArr.unshift(11)
// myArr.shift()

// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

const newArr = myArr.join()

// console.log(myArr)
// console.log(typeof newArr)

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)