// #######################3 Getting input and printing ########################

let name = prompt("Enter your name");
let msg=`welcome ${name}`;
document.getElementById("put").innerHTML = msg;


// ######################### Dark mode ######################################
function changeColor(){
    setTimeout(()=>{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.body.style.fontFamily = 'Helvetica';
    }, 3000);
}
changeColor();

// ######################### clock #############################################

const ctime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}
setInterval(clock, 1000);