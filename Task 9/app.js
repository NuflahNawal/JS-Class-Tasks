// function greet(name , uni){
//     var user = (`Welcome ${name} to ${uni}`)
//     return user
// }
// console.log(user);
// greet("Nuflah","TETR")
// greet()

// function hypo(){
//     function square (a){
//         return a*a
//     }
   
//     var HypoSquare = base * base + perp * prep
//     return Math.sqrt (HypoSquare.toFixed*2)
// }
// console.log(square);
// hypo()


var str = prompt ("Enter a word").toLowerCase();
var reverse = ""
for (var i = str.length-1; i >=0; i--){
    reverse = reverse + str [i]
}
if (reverse === str){
    console.log(`${str} is a palindrome word`);
}else{
    console.log(`${str} is not a palindrome word`);
}

var string = prompt ("Enter a word").toLowerCase();
function str (){
    var reverse = ""
    for (var i = string.length-1; i>=0; i--){
        reverse = reverse + string[i]
    }
    if (reverse === string){
        console.log(`${string} is a palindrome word`);
    }else{
        console.log(`${string} is not a palindrome word`);
    }
}
str(string)