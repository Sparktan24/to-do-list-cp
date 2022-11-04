//  import _ from 'lodash';
// eslint-disable-next-line max-classes-per-file
import './style.css';

/* function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component()); */

//  START
/* const toDoList = [
  {
    description: 'A list test 1',
    completed: false,
    index: 0,
  },
  {
    description: 'A list test 2',
    completed: false,
    index: 1,
  },
  {
    description: 'A list test 3',
    completed: false,
    index: 2,
  },
]; */

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
    //  this.count = this.getTasks().length;
  }
}

//  STORE --------------------------------------------------------------
class Store {
  constructor() {
    this.count = this.getTasks().length;
  }

  getTasks() {
    if (localStorage.getItem('tasks') === null) {
      this.tasks = [];
    } else {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return this.tasks;
  }

  addTask(task) {
    const newTask = {
      id: this.count,
      description: task.description,
      completed: task.completed,
    };

    const tasks = this.getTasks();
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.count += 1;
  }
}

// USER INTERFACE -----------------------------------------------------------------------
const store = new Store();

class UI {
  static displayTasks() {
    const tasks = store.getTasks();
    tasks.forEach((task) => UI.addTaskList(task));
  }

  static addTaskList(task) {
    const taskList = document.querySelector('.item-list');
    const li = document.createElement('li');
    li.classList.add('todo');
    li.innerHTML = `
    <input type="checkbox">
    <div class="saved-item">
      
      <textarea class="task-description" id='${task.index}' maxlength="255">${task.description}</textarea>
    </div>
    <div class="item-icon"></div>`;

    taskList.appendChild(li);
  }

  static clearFields() {
    document.querySelector('#new-item').value = '';
  }
}

/* const listContainer = document.querySelector('.item-list');

toDoList.forEach((element) => {
  const li = document.createElement('li');
  li.classList.add('todo');

  let addElements = '';

  addElements += `
    <input type="checkbox">
    <div class="saved-item">
      <label class="label">${element.description}</label>
      <textarea class="edit" maxlength="255"></textarea>
    </div>
    <div class="item-icon"></div>
  `;
  li.innerHTML = addElements;
  listContainer.appendChild(li);
}); */

document.addEventListener('DOMContentLoaded', UI.displayTasks);
//  const addNewItemEnter = document.querySelector('#new-item');
const AddNewItemClick = document.querySelector('#submit-new-item');

/* addNewItemEnter.addEventListener('keydown', (e) => {
  //  e.preventDefault();
  if (e.keyCode === 13) {
    const description = document.querySelector('#new-item').value;
    const completed = false;
    const index = 1;
    const task = new Task(description, completed, index);
    UI.addTaskList(task);
  }
}); */

AddNewItemClick.addEventListener('click', (e) => {
  e.preventDefault();
  const description = document.querySelector('#new-item').value;
  const completed = false;
  const index = store.count;
  const task = new Task(description, completed, index);
  UI.addTaskList(task);
  store.addTask(task);
  UI.clearFields();
});

const taskContent = document.querySelector('.item-list');

taskContent?.addEventListener('click', (e) => {
  //  const row = document.querySelector('.todo');
  //  row.classList.add('editing');
  const element = e.target;
  element.parentElement.classList('editing');
  const taskId = e.target.id;
  console.log(taskId);
});
