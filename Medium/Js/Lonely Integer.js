// function lonelyInteger(arr){ 
//     let lonelyInt = arr.find(b => !arr.includes(-b))
//     return lonelyInt;
// }
function lonelyInteger(arr){
    let result = 0
    for(let i=0;i<arr.length;i++){
        if(!arr.includes(-arr[i])){
            result = arr[i]
        }
    } 
    return result
}



console.log(lonelyInteger([1, -1, 2, -2, 3]), 3)
console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]), -4)
console.log(lonelyInteger([1, -1, 2, -2, 3, 3]), 3)
console.log(lonelyInteger([-110, 110, -38, -38, -62, 62, -38, -38, -38]), -38)
console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]), -9)