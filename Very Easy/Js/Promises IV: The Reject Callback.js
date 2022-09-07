var promise = new Promise((resolve, reject)=>{
    let animal = "cat"
    setTimeout(() =>{
        if(animal === "dog"){
            resolve("It's a  dog")
        }
        if(animal !=="dog"){ 
           reject("oops!") 
        }
    },1000)
})


console.log(promise, promise)
promise.then(res => console.log(res, "Ignore this test","Do not change the animal variable." )).catch(e => console.log(e, "It's not a dog!"))