// create a functions that takes three arguments;
// -->First element of the sequence first
// -->Constant difference between the elements diff
// -->Total numbers in the sequence n

function arithmeticProgression(start,diff,n){
   let result =String(start);
   for(let i =1;i<n;++i){
    result += ", " + String(start + i * diff);
   }
   return result;

}
console.log(arithmeticProgression(1, 2, 5),"1, 3, 5, 7, 9")
console.log(arithmeticProgression(1, 0, 5), "1, 1, 1, 1, 1")
console.log(arithmeticProgression(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26")
console.log(arithmeticProgression(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10")
