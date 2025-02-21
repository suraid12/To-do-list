"use strict"
addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = " ";
});

const addTask = document.getElementById("addTask");
 let taskInput = document.getElementById("taskInput");

addTask.addEventListener("click", (event) =>{
    event.preventDefault();

}

);
addTask.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") addTask();
});