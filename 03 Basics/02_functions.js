// function calculateCartPrice(...num) {
//     return num
// }

function calculateCartPrice(val1, val2, ...num) {
    return num
}

// console.log(calculateCartPrice(100, 400, 250, 3000))

const user = {
    username: 'onurag',
    price: 699
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    username: 'somesh',
    price: 399
})

const myNewArray = [100, 200, 600, 400]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 500, 300, 600]))