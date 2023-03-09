let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("edabit")
    },1000)
})

let prom = promise.then((err, res) => {
	if(err) { return err } 
	return res
})
prom.then((res) => {
	console.log(typeof res, "string", "The promise needs resolve a string." )	
})

console.log(promise, promise)