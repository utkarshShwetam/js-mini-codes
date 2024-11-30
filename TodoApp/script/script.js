const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTaskElement(){
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; 
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    listContainer.appendChild(li);
    li.appendChild(span);
}

function addTask(){
    if(inputBox.value === ''){
        alert("Plaese enter any value!")
    }else{
        addTaskElement();
    }
    inputBox.value='';
    saveData();

}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
       e.target.parentElement.remove(); 
       saveData();
    }
},false);

inputBox.addEventListener("keydown", function(e) {
    if (e.key === 'Enter' && inputBox.value.trim() !== "") {
        
        addTaskElement();
        inputBox.value = "";
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    // console.log("Data Saved!")
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
