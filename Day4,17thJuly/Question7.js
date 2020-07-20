n = prompt("Enter last element 'n' to print prime number form 2 to n");
for(let count=2; count<=n; count++){
    let flag = 0;
    for(let countt = 2; countt <= count/2 ; countt++){
        if(count % countt == 0){
            flag = 1;
        }
    }
    if(flag == 0){
        console.log(count);
    }
}