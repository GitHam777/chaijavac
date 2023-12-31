// const tinderUser = new Object()
const tinderUser = {}

tinderUser.name = 'Sammy'
tinderUser.id = '123abc'
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'onurag',
            lastname: 'butt-a-charge-g'
        }
    }
}

// console.log(regularUser.fullname)

const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'a', 4: 'b' }

// const obj3 = { obj1, obj2 }
// console.log(obj3)

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))