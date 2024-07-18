let currentDate = document.getElementById('currentDate');
let today = new Date();

currentDate.textContent = today.toDateString() + ', ' + today.getHours() +':' +today.getMinutes();


let numberOfTasks = 0;
function addNewTask(event) {
    event.preventDefault();
    const taskList = document.getElementById('tasks');
    if (!taskList) {
        console.error('taskList element not found');
        return;
    }
    const task = document.getElementById('newTask').value;
    numberOfTasks += 1;
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = '<div class="left" ><button class="box" data-check="s' + numberOfTasks + '" data-text="t' + numberOfTasks + '"> <svg id="s' + numberOfTasks + '" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/></svg> </button><p id="t' + numberOfTasks + '">'+ task +'</p></div><div class="right"><button class="time"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/></svg> 21:00 - 00:00</button><button class="more"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg></button></div>';
    taskList.appendChild(newTask);
    document.getElementById('newTask').value = '';
}


const form = document.getElementById('NewTaskForm');
form.addEventListener('submit', addNewTask);

document.addEventListener('DOMContentLoaded', (event) => {
    document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.dataset.check && e.target.dataset.text) {
            let checkId = e.target.dataset.check;
            let textId = e.target.dataset.text;

            let checkElement = document.getElementById(checkId);
            let textElement = document.getElementById(textId);

            if (checkElement && textElement) {
                // Toggle visibility
                if (checkElement.style.visibility === 'visible') {
                    checkElement.style.visibility = 'hidden';
                    textElement.style.textDecoration = 'none';
                } else {
                    checkElement.style.visibility = 'visible';
                    textElement.style.textDecoration = 'line-through';
                }
            }
        }
    });
});




function selectDate() {
    const button = document.getElementById('date');
    let chevronUp = '<svg id="chelvon-up" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"/></svg>';
    let chevronDown = '<svg id="chelvon-down" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/></svg>';

    if (button.classList.contains('up')) {
        button.innerHTML = chevronDown + ' Today';
        button.style.height = '35px';
        button.classList.remove('up');
    } else {
        button.innerHTML = chevronUp + ' Select Date';
        button.style.height = 'auto';
        button.style.textAlign = 'left';
        button.style.alignItems = ' ';
        button.classList.add('up');
    }
}



const button = document.getElementById('date');
button.addEventListener('click', selectDate);


