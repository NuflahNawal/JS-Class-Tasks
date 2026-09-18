// Outer loop controls rows
// for (let i = 1; i <= 3; i++) {
//     console.log(`Outer iteration ${i}`);
  
//     // Inner loop controls columns/steps
//     for (let j = 1; j <= 2; j++) {
//       console.log(`Inner step ${j}`);
//     }
// }

for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 5; j++){
    document.write ("*")
    }

    document.write("<br>")
}

for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= i; j++){
    document.write ("*")
    }

    document.write("<br>")
}

// var user = prompt ("How many star you want in a row?")
// var suser = prompt ("How many star you want in a column?")
// for (var i = 1; i <= suser; i++) {
//     for (var j = 1; j <= user; j++){
//     document.write ("*")
//     }

//     document.write("<br>")
// }

for (var i = 1; i <= 1; i++) {
    for (var j = 1; j <= 5; j++){
    document.write ("*")
    }

    document.write("<br>")
}