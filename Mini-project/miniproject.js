
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const button5 = document.querySelector("#btn5");
const list3 = document.querySelector("#list3");
var listItem = [];
// debugger;
getTodos();

// ###############3 clear items button ########################
button5.onclick = function(){
    window.localStorage.clear();
    console.clear();
    todo = [];
    var e = document.querySelector("#list3"); 
    e.innerHTML = '';
        
         

}

// ####################  add item button ##################
button3.onclick = function(){
    // debugger;
    let item3 = document.querySelector("#todo").value;
    var text3 = document.createTextNode(item3);
    listItem = document.createElement('li');
    listItem.appendChild(text3);
    list3.appendChild(listItem);
    saveTodos(item3);
    document.forms.myformTodo.reset();  
        // to reset the input bar after clicking on button (add item)

}

// ######################  remove button ########################## 
button4.onclick = function(){
    // debugger;
    let list4 = document.querySelector("#list3");
    var arrayFromStroage = JSON.parse(localStorage.getItem("todo"));
    var indexx = arrayFromStroage.length;
    // console.log(indexx);

    // list4.removeChild(list4.childNodes[indexx]);
    list4.removeChild(list4.childNodes[indexx]);
    document.forms.myformTodo.reset();  
    saveTodosremove(indexx);


}

// ################### add to localStorage #######################3
function saveTodos(todoinput){
    let todo;
    if (localStorage.getItem('todo') === null){
        todo = [];
        console.log(todo);
    }
    else{
        todo = JSON.parse(localStorage.getItem('todo'));
    }
    todo.push(todoinput);
    localStorage.setItem('todo', JSON.stringify(todo));
}

// #####################3 remove from local Storage ##########################
function saveTodosremove(index){
    let todo;
    if (localStorage.getItem('todo') === null){
        todo = [];
    }
    else{
        todo = JSON.parse(localStorage.getItem('todo'));
    }
    todo.splice(index-1, 1);
    localStorage.setItem('todo', JSON.stringify(todo));
}

// ##################### give localstorage data to webpage #######################
function getTodos(){
    var str = localStorage.getItem("todo");
    todos = JSON.parse(str);
    if(!todos){
        todos = [];
    }
    todos.forEach(function(element) {
        listItem = document.createElement('li');
        listItem.append(element);        
        list3.appendChild(listItem);
    });
    
}
