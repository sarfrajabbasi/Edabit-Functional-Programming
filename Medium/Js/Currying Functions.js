// create a function which takes a array arr of integers as an argument.

// curry functions
function multiply(arr){
    let newArr = []
    return x => {
        for(let i =0;i<arr.length;i++){
        newArr.push(arr[i]*x)
    }
    return newArr
}
}

console.log(multiply([1, 2, 3])(1), [1, 2, 3])

console.log(multiply([1, 2, 3])(2), [2, 4, 6])

console.log(multiply([1, 2, 3])(0), [0, 0, 0])

console.log(multiply([4, 6, 5])(10), [40, 60, 50])

console.log(multiply([])(10), [], "should return an empty array")

