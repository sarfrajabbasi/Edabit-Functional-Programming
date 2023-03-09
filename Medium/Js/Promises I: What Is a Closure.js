// Closures are functions that remember their lexical environments.

function greetingMaker(salutation){
    function closure(name){
        return salutation + ", " + name
    }
    return closure
}

const greeting = greetingMaker("Hello")

console.log(greeting("James"), "Hello, James")
console.log(greeting("John"), "Hello, John")
console.log(greeting("Jacob"), "Hello, Jacob")
console.log(greeting("Joseph"), "Hello, Joseph")