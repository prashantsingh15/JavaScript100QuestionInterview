// Question : - Given a string , reverse each word in the sentance

// Hi how are you
// ih woh era uoy

var str = "Hi how are you";
var savedStr = str.split(" ").map(function(word){
    return word.split("").reverse().join("")

})

console.log(savedStr.join(" "))
