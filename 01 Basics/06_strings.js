let name = 'onurag'
let repoCount = 70

//console.log(name + repoCount + " value")

// console.log(`Hello my name is ${name} and my Repo count is ${repoCount}`)

const gameName = new String('onuragroxx')

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf('x'))

const newString = gameName.substring(0, 4)
//console.log(newString)

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString)

const newStringOne = "    onurag    "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = 'https://onurag.com/onurag%69butt%a%charge%g'
console.log(url.replace('%69', '-'))
console.log(url.includes('onurag'))