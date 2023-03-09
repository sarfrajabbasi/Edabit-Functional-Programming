function magnitude(vector){
  return Math.hypot(...vector);
}
function magnitude(vector){
   return vector.reduce((x,y) => Math.sqrt(x*x +y*y),0)
}
function magnitude(vector){
 
  let magniT = Math.sqrt(vector.map(x => x**2).reduce((a,b)=> a+b,0))
return magniT
} 

// Basic tests

console.log(magnitude([3,4]),5,'basic test not met');
console.log(magnitude([0,0,-10]),10,'basic test not met');
console.log(magnitude([]),0,'basic test not met');
console.log(magnitude([2,3,6,1,8]),10.677078252031311,'basic test not met');

// Extra tests

console.log(magnitude([9,-9,3]),13.076696830622021);
console.log(magnitude([-24,94,4,0,10]),97.61147473529944);