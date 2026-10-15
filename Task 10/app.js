// var day = new Date().getDay();
// // var day = "wed".toLowerCase()
// switch (day) {
//     case "sat":
//     case "sun":
//         console.log("Whoopeee!");
//         break;
//     case "fri":
//         console.log("Leave");
//         break;
//     default:
//         console.log("Shoot me now!");
// }


// function overtimeWorded (hoursWorked) {
//     var regularLimit = 40;
//     var overtimeRate = 12.00;
//     if (hoursWorked > regularLimit) {
//         var overtimeCal = hoursWorked - regularLimit
//         var overtimePay = overtimeCal * overtimeRate

//         console.log(`Hour worked ${hoursWorked}`);
//         console.log(`Overtime Worked ${overtimeCal}`);
//         console.log(`Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);
//     }

//     else {
//         console.log(`Hour worked ${hoursWorked}`);
//         console.log("No overtime worked");
//         console.log("Overtime pay: Rs. 0.00");

//     }
// }
// overtimeWorded (45)


function currency (amount) {
    var rs1 = Math.floor (amount / 100)
    var rs2 = Math.floor (amount % 100)
    var rs3 = 

    if (100){
        console.log(100);
    }else if (400){
        console.log(100,100,100,100);
    }
}


// function calculateNotes(amount) {
//     // 1. Calculate how many 100 notes are needed
//     let hundredNotes = Math.floor(amount / 100);
//     let remainingAmount = amount % 100; // What is left after 100s

//     // 2. Calculate how many 50 notes are needed from the remainder
//     let fiftyNotes = Math.floor(remainingAmount / 50);
//     remainingAmount = remainingAmount % 50; // What is left after 50s

//     // 3. Calculate how many 10 notes are needed from the final remainder
//     let tenNotes = Math.floor(remainingAmount / 10);

//     // Display the results
//     console.log(`For an amount of Rs. ${amount}:`);
//     console.log(`- 100 Rupee Notes: ${hundredNotes}`);
//     console.log(`- 50 Rupee Notes: ${fiftyNotes}`);
//     console.log(`- 10 Rupee Notes: ${tenNotes}`);
// }

// // Test the function with an example amount (e.g., 570)
// calculateNotes(570);
