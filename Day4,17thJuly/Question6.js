
myfunction();
function myfunction(){
    let numbervar = prompt("Enter number greater than 100");
    (numbervar > 100) ? console.log(numbervar): numbervar == "" || numbervar == null ? numbervar.close() : myfunction();
}

