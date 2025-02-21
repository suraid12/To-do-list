"use strict"
addEventListener("beforeunload", (event) => {
    event.preventDefault();
    event.returnValue = " ";
});
document.getElementById("addTask").addEventListener("click", (event) =>{
    event.preventDefault();

}

);
document.getElementById("addTask").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") addTask();
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    let errorMessage1 = document.getElementById("errorMessage1");
    let errorMessage2 = document.getElementById("errorMessage2");

    
    if (!taskText) { // if the value of taskText is empty, it means
        errorMessage1.classList.remove("hidden");
        return;
    }
    errorMessage1.classList.add("hidden");

    let taskList = document.getElementById("taskList");
    
    let existingTasks = Array.from(document.querySelectorAll("#taskList .task-text"))
                            .map(div => div.textContent.toLowerCase()); // Ensure case-insensitive comparison
    if (existingTasks.includes(taskText.toLowerCase())) {
    errorMessage2.classList.remove("hidden");
        
        return;
    }else{
    errorMessage2.classList.add("hidden");

    }

    
    let rowCount = taskList.children.length + 1;
    let taskItem = document.createElement("div");
    taskItem.classList.add("flex", "p-2", "border-b", "break-words", "text-sm", "md:text-base");
    taskItem.innerHTML = `
        <div class="w-1/6 text-center">${rowCount}</div>
        <div class="w-1/2 task-text break-words">${taskText}</div>
        <div class="w-1/6 text-center">
            <input type="checkbox" class="task-status">
        </div>
                        <button class="text-green-500 edit-task pr-4">✏️</button>
            <button class="text-red-500 delete-task">🗑️</button>
        </div>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
    updateSummary();

    
}
    
document.getElementById("taskList").addEventListener("click", function(event) {
    let target = event.target;
    
    if (target.classList.contains("delete-task")) {
        target.closest(".flex").remove();
        updateSummary();
    }