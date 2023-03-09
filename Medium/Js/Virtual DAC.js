function adc(value ){
let result = (value *5)/1023;
return Number(result.toFixed(2))
}

function adc(value){
    return +(value*5/1023).toFixed(2)
}

console.log(adc(1023), 5)
console.log(adc(0), 0)
console.log(adc(500), 2.44)
console.log(adc(400), 1.96)
console.log(adc(850), 4.15)