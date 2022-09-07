function invertArray(arr){
    let invertArr = []
    for(let i=0;i<arr.length;i++){
       (arr[i]===0)? invertArr.push(0) :invertArr.push(arr[i]* -1)
    }
    return invertArr
}
console.log(invertArray([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
console.log(invertArray([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
console.log(invertArray([]), [])
console.log(invertArray([0]), [0])
