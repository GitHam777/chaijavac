function one() {
    const username = 'onurag'

    function two() {
        const website = 'github'
        console.log(username)
    }
    // console.log(website)

    two()
}

// one()

if(true) {
    const username = 'onurag'
    if(username === 'onurag') {
        const website = ' guthib'
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


// addOne(7) -> works
function addOne(value) {
    return value + 1
}

addOne(7)


// addTwo(9) -> error
const addTwo = function(value) {
    return value + 2
}

addTwo(4)