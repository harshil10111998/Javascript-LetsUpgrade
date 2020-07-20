let operations = prompt("Write operands and operator with spaces like (2 + 3) to perform addition of 2 and 3, choose operator (+,-,*,/,Sq,%) for (addition, subtraction, multiplcation, division, Squareroot, Percentage) respectively. Note => to perform square root write (36 Sq) to perform square root of 36");


let splittedElements = operations.split(" ");

debugger;

// to handle sqrt invalid case  
if(splittedElements[1] == "Sq" && splittedElements[2] != null){
    splittedElements[1] = -1;
}


switch(splittedElements[1]){
    case '+' :
        res = Number(splittedElements[0])  + Number(splittedElements[2]) ;
        break;
    case '-':
        res = Number(splittedElements[0])  - Number(splittedElements[2]) ;
        break;
    case '*' :
        res = Number(splittedElements[0])  * Number(splittedElements[2]);
        break;
    case '/':
        res = Number(splittedElements[0])  / Number(splittedElements[2]) ;
        break;
    case 'Sq' :
        res = Math.sqrt(Number(splittedElements[0]) );
        break;
    case '%':
        res = ((Number(splittedElements[0])  / Number(splittedElements[2]) ) * 100) + '%';
        break;
    default:
        res = -1;
}
if(res == -1){
    console.error("Enter valid input");
}
else{
    console.log(`${operations} = ${res}`);
    document.write(`${operations} = ${res}`);

}
