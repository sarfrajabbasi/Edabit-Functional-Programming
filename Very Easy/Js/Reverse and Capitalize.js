// Create a function that takes a string of lowercase char. and returns that string reversed and in uppercase
function reverseCapitalize(str) {
    let arr = [];
    for(let i = str.length; i>=0;i--){
       arr.push(str[i])
       
       
    }
    arr.shift()
     return arr.join("").toUpperCase()
}

function reverseCapitalize(str) {
 return str.split("").reverse().join("").toUpperCase()
	
}
console.log(reverseCapitalize("edabit"), "TIBADE")
console.log(reverseCapitalize("abc"), "CBA")
console.log(reverseCapitalize("hellothere") ,"EREHTOLLEH")
console.log(reverseCapitalize("input") , "TUPNI")
console.log(reverseCapitalize("indubitably") , "YLBATIBUDNI")