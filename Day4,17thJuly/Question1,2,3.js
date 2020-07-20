// ############################3 Question-1 ##################################### 

console.log("####################### Question-1 #########################3");
// debugger;
for(let count=0; count<=100; count++){
    if(count % 3 == 0 && count % 5 == 0){
        console.log(count, "fizzbuzz");
    }
    else if(count % 3 == 0){
        console.log(count, "fizz");
    }
    else if(count % 5 == 0){
        console.log(count, "buzz");
    }
    

}

// #########################33 Question-2 ########################################3
console.log("#####################3 Question-2 ###########################3");
const student = {
    name : "Helsinki",
    age : 24,
    projects : {
        diceGame : "Two player play dice with javascript"
    }
};

const {name, age, projects:{diceGame}} = student;
console.log(`name = ${name}, age = ${age}, projects = {diceGame = ${diceGame}}`);

// ############################ Question-3 ##################################
console.log("####################### Question-3 #############################");

let shoppingList = {
    Sugar : "2 kg",
    fruits : {
        apple : "2 kg",
        mango : "1 dozen",
        watermelon : "1 kg"
    },
    salt : "1 kg"
}
console.log(`shoppingList is`);
console.log( shoppingList);
console.log("items to add are stationary: pencil, eraser, sharpener and water-bottle");
let shoppingBasket = {
    ...shoppingList,
    stationary : {
        pencil : "3 box",
        eraser : "1 box",
        sharpener : "1 box"
    },
    waterBottle : "1",
   

};
console.log(`shoppingBasket after adding items in it is `);
console.log(shoppingBasket);

