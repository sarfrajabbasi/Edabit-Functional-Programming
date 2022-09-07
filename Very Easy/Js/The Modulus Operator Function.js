// Create function that will work as the modulus operator % without using the modulus operator;
// return the whole number remainder;

function mod(a,b){
    // Strep:-1
    // Find quotient (integer  parts only)
    let q = parseInt(a/b)

    // Strep:-2
    // Find Product
    let p = q*b

    // Strep:-3
    // Find modulus (remainder)
    let m = a-p
    return m
}
console.log(mod(0, 3), 0)
console.log(mod(1, 3), 1)
console.log(mod(5, 3), 2)
console.log(mod(4, 5), 4)
console.log(mod(218, 5), 3)