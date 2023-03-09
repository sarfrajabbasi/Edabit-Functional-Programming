function isRepdigit(num){
    if(num >=0 && num%2===0){
        return true
    }else if(num<=0){
        return "The number must be >= 0"
    }
    
    return false

}
console.log(isRepdigit(6), true)
console.log(isRepdigit(66), true)
console.log(isRepdigit(666), true)
console.log(isRepdigit(6666), true)
console.log(isRepdigit(1001), false)
console.log(isRepdigit(-11), false, "The number must be >= 0")