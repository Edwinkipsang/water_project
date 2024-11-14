const addTaskBtn=document.getElementById("addTaskBtn")
const taskInput=document.getElementById("taskInput")
const taskList=document.getElementById("taskList")

function addTask(){
    const taskText=taskInput.ariaValueMax.trim()
    if (taskText === ""){
        alert("Please enter a task")
        return;
    }

    const li=document.createElement("li")
    li.textContent =taskText

    const removeBtn =document.createElement("button")
    removeBtn.textContent="remove"
    removeBtn.onclick=function() {
        taskList.removeChild(li)

    }
    li.appendChild(removeBtn)
    taskList.appendChild(li)

    taskInput.value=""
}

addTaskBtn.addEventListener("click", addTask)
taskInput.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask()
    }
})