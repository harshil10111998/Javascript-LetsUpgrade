var color = [ 'black', 'wheat', 'red', 'purple', "skyblue","purple"];
var current = 0;
    
    function changeColor() {
        document.body.style.backgroundColor = color[current];
        current = (current + 1) % color.length;
        setTimeout(changeColor, 5000);    
    }
    
    // color = ['black', 'wheat', 'red', 'purple']
    
    //     function changeColor(it){
        
    //         setTimeout(()=>{
    //             let colorvar = color[it];
    //             document.bgColor = colorvar;
    //         }, 1000);
    //     }
    
       
    //        for(let i=0; i<4; i++){
    //             changeColor(i);
    //         }
        
    
    
