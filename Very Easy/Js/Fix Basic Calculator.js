// Create  a function that takes two numbers a and b and an operator "o".
// functions should return result of the corresponding mathematical function on both numbers.
// if the operator is not one of the specified char.,+,-,/,*;
// or if there is division by zero,the function should be null
function basicCalculator(a,o,b){
    let result =0;
    if(o==="+"){
         result = a+b;
    }else if(o==="-"){
         result = a-b;
    }else if(o==="*"){
        result = a*b;
    }else if(o==="%"){
         result =a%b;
    }else if(a===0 || b===0 && o==="/" ){
         result = null;
    }else if(o==="/"){
        result = a/b;
   }else{
        result = null
    }
    return result
}
console.log(basicCalculator(2, '+', 4), 6)
console.log(basicCalculator(12, '-', 6), 6)
console.log(basicCalculator(18, '/', 2), 9)
console.log(basicCalculator(6, '*', 4), 24)
console.log(basicCalculator(2, '/', 0), null)
console.log(basicCalculator(2, 'x', 4), null)
console.log(basicCalculator(2, 'o', 4), null)
console.log(basicCalculator(12, '-', 2), 10)
console.log(basicCalculator(17, '*', 2), 34)
