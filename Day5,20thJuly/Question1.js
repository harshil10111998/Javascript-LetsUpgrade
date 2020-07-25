// ############################ Question-1 ####################################
let number = 0;
let numberarr = [];

// let numberarr = [1,2,3,4,5,6,7];

while(number != null){
    console.log(number);
    number = window.prompt("Enter array of number... Click cancel to end array");
    if (number != null)
        numberarr.push(parseInt(number));
    console.log(numberarr);
}

console.log("the desired output is ");
console.log(numberarr.filter(el=>el%2 != 0).map((el)=>el**3));

