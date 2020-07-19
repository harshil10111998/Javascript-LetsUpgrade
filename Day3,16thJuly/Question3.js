console.log("##################### using conditional statement ##################### ")
let marks = prompt("Enter marks obtained");
if (marks >= 90){
    console.log("Marks is ", marks, "and grade is A")
} 
else if (marks < 90 && marks >= 50){
    console.log("Marks is ", marks, "and grade is B")
} 
else if (marks < 50 && marks >= 30){
    console.log("Marks is ", marks, "and grade is C")
} 
else{
    console.log("Marks is ", marks, "and grade is D")
} 


// ##################3 Using switch ########################## 

console.log("##################### using switch ##################### ")
switch(true){
    
    case (marks >= 90) : 
        console.log("Marks is ", marks, "and grade is A");
        break;
    case (marks < 90 && marks >= 50) : 
        console.log("Marks is ", marks, "and grade is B");
        break;
    case (marks < 50 && marks >= 30) : 
        console.log("Marks is ", marks, "and grade is C");
        break;
    case (marks < 30 && marks >= 0) : 
        console.log("Marks is ", marks, "and grade is D");
        break;
    default:
        console.log("Enter valid marks");
        break;
}