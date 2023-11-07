let marvelHeroes = ['ironman', 'thor', 'spiderman']
let dcHeroes = ['superman', 'flash', 'batman']

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][1])

// const allHeroes = marvelHeroes.concat(dcHeroes)
// console.log(allHeroes)

// const allHeroes = [...marvelHeroes, ...marvelHeroes]
// console.log(allHeroes)

let anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray)

console.log(Array.isArray('Onurag'))
console.log(Array.from('Onurag'))
console.log(Array.from({name: 'Onurag'}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))