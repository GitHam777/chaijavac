function sayMyName() {
    console.log('O')
    console.log('N')
    console.log('U')
    console.log('R')
    console.log('A')
    console.log('G')
}

// sayMyName()

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2)
// }

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(5, 7)
// console.log('Result:', result)


function logInUserMessage(username) {
    // if(username === undefined) {
    if(!username) {
        console.log('Please enter username')
        return
    }
    return `${username} just logged in`
}

// console.log(logInUserMessage('onurag'))
console.log(logInUserMessage())