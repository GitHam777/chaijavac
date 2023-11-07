const mySym = Symbol('key1')

let JSuser = {
    name: 'Onurag',
    'full name' : 'onurag butt-a-charge-g',
    [mySym] : 'myKey1',
    age: 6,
    location: 'Mirzapur',
    email: 'nono@nono.com',
    isLoggedIn: false,
    lastLoggedIn: ['Monday', 'Tuesday']
}

// console.log(JSuser.name)
// console.log(JSuser['full name'])
// console.log(JSuser[mySym])

// JSuser.email = 'yesyes@yes.com'
// Object.freeze(JSuser)
// JSuser.email = 'nono@no.com'
// console.log(JSuser)

JSuser.greeting = function() {
    console.log("HELLO JS USER")
}
JSuser.greeting2 = function() {
    console.log(`HELLO JS USER, ${this.name}`)
}

console.log(JSuser.greeting2())