// immediatly invoked function expression 

(function coff() {
    console.log(`DB Connected`)
}) ();

// coff()

( (name) => {
    console.log(`DBS Connected ${name}`)
}) ('onurag')