var English = +prompt ("Enter English marks")
var Urdu = +prompt ("Enter Urdu marks")
var Math = +prompt ("Enter Math marks")

var totalMarks = 300
var totalObtainedMarks = English + Urdu + Math;





var percentage = (totalObtainedMarks *100)/totalMarks
var grade
if((eng >100 && urdu >100 && math>100) || ( eng <0 && urdu <0 && math<0) ){ 
}else if(eng <0 && urdu <0 && math<0){
    console.log("Invalid Marks");
}else{
    if(percentage >=80 && percentage <=100){
        grade = "A+"
        console.log(percentage+"% Grade A+" );
    }else if(percentage >=70 && percentage <80){
        grade = "A"
        console.log(percentage+"% Grade A" );
    }else if(percentage >=60 && percentage <70){
        grade= "B"
        console.log(percentage+"% Grade B" );
    }else if(percentage >=50 && percentage <60){
        grade= "C"
        console.log(percentage+"% Grade C" );
    }else if(percentage >=0 && percentage <50){
        grade= "Sorry, you are Fail!"

        console.log(percentage+"% Sorry, you are Fail!" );
    }
}

document.write(` <table border="1">
<tr bgColor="gray">
    <th>Subjects</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
</tr>
<tr>
    <th>English</th>
    <td>100</td>
    <td>${English}</td>
</tr>
<tr bgColor="gray">
    <th>Urdu</th>
    <td>100</td>
    <td>${Urdu}</td>
</tr>
<tr>
    <th>Math</th>
    <td>100</td>
    <td>${Math}</td>
</tr>
<tr bgColor="gray">
    <th>Total</th>
    <th>${totalMarks}</th>
    <th>${totalObtainedMarks}</th>
</tr>
</table>`)

document.write(`
<h2>Percentage : ${percentage}</h2>
   <h3>Grade : ${grade}<h3>
   `)