//  import _ from 'lodash';
// eslint-disable-next-line max-classes-per-file
import './style.css';
import Task from './modules/Task.js';
import Store from './modules/Store.js';
import TaskList from './modules/TaskList';

// USER INTERFACE -----------------------------------------------------------------------
const store = new Store();
const tasksList = new TaskList();
const generatedElements = document.querySelector('.tasks-container');

/* class UI {
  static displayTasks() {
    const tasks = store.getTasks();
    tasks.forEach((task) => UI.addTaskList(task));
  }

  static addTaskList(task) {
    const taskList = document.querySelector('.item-list');
    const li = document.createElement('li');
    li.classList.add('todo');
    li.id = `todo-${task.index}`;
    li.innerHTML = `
    <input type="checkbox">
    <div class="saved-item">
      
      <textarea class="task-description" id="${task.index}" maxlength="255">${task.description}</textarea>
    </div>
    <div class="item-icon" id="${task.index}"></div>
    <div class="delete-icon hidden" id="${task.index}"></div>`;

    taskList.appendChild(li);
  }

  static clearFields() {
    document.querySelector('#new-item').value = '';
  }
} */

const renderTitle = () => {
  const title = document.createElement('div');
  title.classList.add('row');
  title.innerHTML = `
  <h2>Demo</h2>
  <div class="refresh"></div>`;
  return title;
};

const renderAddItem = () => {
  const addElementInput = document.createElement('div');
  addElementInput.id = 'input-row';
  addElementInput.innerHTML = `
  <input type="text" id='add-new-item' class="input-new-item" placeholder="Add to your list...">
  <input type="submit" id="submit-new-item" value title="click this or press enter to submit">
  `;
  return addElementInput;
};

const renderItemRows = () => {
  const item = document.createElement('ul');
  //  item.id = 'todo';
  //  item.classList.add('item-list');
  item.id = 'list-content';
  const list = tasksList.getTask();
  list.forEach((task) => {
    item.appendChild(task);
  });
  return item;
};

const renderBtn = () => {
  const btn = document.createElement('div');
  btn.innerHTML = '<button class=\'row\' id="clear-btn">Clear all completed</button>';
  return btn;
};

generatedElements.appendChild(renderTitle());
generatedElements.appendChild(renderAddItem());
generatedElements.appendChild(renderItemRows());
generatedElements.appendChild(renderBtn());

//  document.addEventListener('DOMContentLoaded', UI.displayTasks);
//  const addNewItemEnter = document.querySelector('#new-item');
const AddNewItemClick = document.querySelector('#submit-new-item');

/* AddNewItemClick.addEventListener('click', (e) => {
  e.preventDefault();
  const description = document.querySelector('#new-item').value;
  const completed = false;
  const index = store.count;
  const task = new Task(description, completed, index);
  UI.addTaskList(task);
  store.addTask(task);
  UI.clearFields();
}); */

function Listener() {
  const taskContent = document.querySelectorAll('task-description');
  taskContent.forEach((description) => {
    taskContent.addEventListener('click', (e) => {
      const row = document.querySelector('.todo');
      row.classList.add('editing');
    });
  });
} //  Listener
Listener();
