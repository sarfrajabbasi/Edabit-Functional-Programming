String.prototype.toString = function() {
	return Object.values(this).reverse().join("")
    
}
String.prototype.toString = function() {
    let str = '';
    for(let i = this.length - 1; i >= 0; i--){
        str += this[i];
    } 
        
    return str;
}
console.log(("Hello World!").toString(), "!dlroW olleH")
console.log(("My hooking function! :3").toString(), "3: !noitcnuf gnikooh yM")
console.log(("RaceCar").toString(), "raCecaR")
console.log(("Level").toString(), "leveL")
console.log(("live").toString(), "evil")
console.log(("penut butter").toString(), "rettub tunep")