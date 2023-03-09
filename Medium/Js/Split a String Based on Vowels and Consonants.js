// function split(str){
//     let vowels = ''
//     let consonants =''
//     for(let i=0;i<str.length;i++){
//         if(isvowels(str[i])){
//             vowels += str[i]
//         }else{
//             consonants += str[i]
//         }
//     }
//     return vowels + consonants
// }
// function isvowels(letter){
//     let vowels = "aeiou";
//     return vowels.includes(letter)
// }

// function split(str){
//     let strA = str.match(/[aeiou]/gi).join("");
//     let strB = str.match(/[^aeiou]/gi).join("");
//     return strA + strB
    
    
// }
// function split(str){
//        const vr =  str.replaceAll(/[^aeiou]/gi,'') + str.replaceAll(/[aeiou]/gi,'');
//         return vr;
//     }
    

// console.log(split("abcde"), "aebcd")
// console.log(split("Hello!"), "eoHll!")
// console.log(split("What's the time?"), "aeieWht's th tm?")

