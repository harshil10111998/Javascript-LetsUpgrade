let sales = prompt("Enter sales of employee during entire year");
switch(true){
    case (sales >= 0 && sales <= 5000):
        console.log(`total commision = ${0.02 * sales}`);
        break;
    case (sales >= 5001 && sales <= 10000):
        console.log(`total commision = ${0.05 * sales}`);
        break;
    case (sales >= 10001 && sales <= 20000):
        console.log(`total commision = ${0.07 * sales}`);
        break;
    case (sales >= 20001):
        console.log(`total commision = ${0.1 * sales}`);
        break;
    default:
        console.error("Enter valid sales")

}