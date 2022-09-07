function numArgs(){
    // Create a function that returns the number of arguments it was called with.
    return arguments.length
}
console.log(numArgs(), 0)
console.log(numArgs('foo'), 1)
console.log(numArgs('foo', 'bar'), 2)
console.log(numArgs(null, null), 2)
console.log(numArgs('foo', 'bar', 5, null), 4)
console.log(numArgs(false), 1)
console.log(numArgs('foo', {}), 2)
console.log(numArgs('foo', 'bar', {}), 3)
console.log(numArgs([], [], {}), 3)
console.log(numArgs('foo', 'bar', true, null, 0), 5)