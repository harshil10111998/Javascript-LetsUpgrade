function table() {
    let number = window.prompt("enter a number");
    let display = ""; 
    for (let i = 1; i<=10; i++) {
        let result = i * number;
        display += number + " * " + i + " = " + result + "<br>";
    }
    document.getElementById("table").innerHTML = display;
  }
  