//Define UI Variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


//Load All Event Listeners
loadEventListeners();

//Load All event listeners

function loadEventListeners() {
  //Add Task Event
  form.addEventListener('submit', addTask);
}

//Add Task

function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a Task');
  }

  //Create Li element
  const li = document.createElement('li');

  //Add class to Li
  li.className = 'collection-item';

  //Create Text node and append it to the li
  li.appendChild(document.createTextNode(taskInput.value));

  //Create new link element
  const link = document.createElement('a');

  //Add class to link
  link.className = 'delete-item secondary-content';

  //Add icon 
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append link to the li 
  li.appendChild(link);

  //Append Li to the UL 
  taskList.appendChild(li);
  
  // console.log(li);

  //Clear the input
  taskInput.value = '';
  e.preventDefault();
}