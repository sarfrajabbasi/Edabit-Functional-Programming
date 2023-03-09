// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

function hackerSpeak(str) {
  splitStr = str.split("")
  for (let i = 0; i < str.length; i++) {
    if(splitStr[i] ==="a"){
      splitStr[i] = "4"
    }else if(splitStr[i]==="i"){
      splitStr[i] ="1"
    }else if(splitStr[i]==="e"){
      splitStr[i] ="3"
    }else if(splitStr[i]==="o"){
      splitStr[i] ="0"
    }else if(splitStr[i]==="s"){
      splitStr[i] ="5"
    }

  }
  return splitStr.join("");
}

console.log(hackerSpeak("javascript is cool"), "j4v45cr1pt 15 c00l");
console.log(hackerSpeak("become a coder"), "b3c0m3 4 c0d3r");
console.log(hackerSpeak("hi there"), "h1 th3r3");
console.log(hackerSpeak("programming is fun"), "pr0gr4mm1ng 15 fun");
console.log(hackerSpeak("keep on practicing"), "k33p 0n pr4ct1c1ng");
