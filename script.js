let addToDo = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDoContainer");
let inputField = document.getElementById("inputField");

alert("Single click to line through and double click to delete");

addToDo.addEventListener('click', function(){
    let para = document.createElement('p');
    para.classList.add('paraStyling');
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";
    para.addEventListener('click', function(){
        para.style.textDecoration = "line-through";
    });
    para.addEventListener('dblclick', function(){
        toDoContainer.removeChild(para);
    });
});
inputField.addEventListener('keyup',e=>{
    e.preventDefault();
    if(e.keyCode==13){
        let para = document.createElement('p');
    para.classList.add('paraStyling');
    para.innerText = inputField.value;
    toDoContainer.appendChild(para);
    inputField.value = "";
        para.addEventListener('click', function(){
            para.style.textDecoration = "line-through";
        });
        para.addEventListener('dblclick', function(){
            toDoContainer.removeChild(para);
        });
    inputField.click();
    }
});