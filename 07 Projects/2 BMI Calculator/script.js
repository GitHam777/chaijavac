const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter correct height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter correct weight ${weight}`
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        // Show the results
        if(bmi < 18.6) {
            results.innerHTML = `<span> ${bmi} (Underweight) </span>`
        } else if(bmi < 24.9) {
            results.innerHTML = `<span> ${bmi} (Optimum weight) </span>`
        } else {
            results.innerHTML = `<span> ${bmi} (Overweight) </span>`
        }
    }
})