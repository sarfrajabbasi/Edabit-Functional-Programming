
function keyboardMistakes(str){
    str = str.replace(/4/g,"A")
    str = str.replace(/5/g,"S")
    str = str.replace(/0/g,"O")
    str = str.replace(/1/g,"I")
    return str
}
console.log(keyboardMistakes("MUB45H1R"), "MUBASHIR")
console.log(keyboardMistakes("DUBL1N"), "DUBLIN")
console.log(keyboardMistakes("51NG4P0RE"), "SINGAPORE")
console.log(keyboardMistakes("P4K15T4N"), "PAKISTAN")
console.log(keyboardMistakes("P4R15"), "PARIS")