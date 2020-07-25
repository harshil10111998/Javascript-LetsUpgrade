let randomvar = Math.ceil(100*Math.random());
console.log(randomvar);

fetch('http://jsonplaceholder.typicode.com/todos').
then(response => response.json())
.then(data => {   console.log(data);
})
