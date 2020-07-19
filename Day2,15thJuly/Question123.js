// ####################### Question-1 ###########################################

console.log("###############33 Question-1 ####################3333");
let age = prompt("enter your age");
console.log(age);


// ##########################3 Question-2  #######################################

console.log("##################### Question-2 ##############################");
console.log("################3 String : #############3###");
name = "Harshil";
name2 = "Parmar"
word = "he is brave boy";
console.log(name);
console.log( name.charAt(2) );
console.log( name.concat(name2) );
console.log( word.endsWith("boy") );
console.log( word.includes("brave") )
// Returns true if key is included in the range, and false otherwise
console.log(word.toUpperCase());
console.log(word.toLowerCase());
console.log(word.trim());
document.write(word.fontsize("7"));



console.log("#######################33 Arrays : ######################333333 ");
let arr = [23,45,78,4,5,7,8,3];
arr1 = arr;
console.log(arr);
console.log(Array.isArray(arr));
console.log(arr.slice(2,5));
console.log(arr.sort());
console.log(arr.indexOf(11));
console.log(arr.pop());
console.log(arr.toString());
console.log(arr.concat(["Harshil"]));
console.log(arr.push("Parmar"));
console.log(arr);


// ##################################### Question-3 #################################

console.log("######################3 Question-3 #########################");

if (age > 21){
    console.log("Can Drink");

}
else{
    console.log("Cannot Drink");
}
