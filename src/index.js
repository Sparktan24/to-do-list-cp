import './style.css';
import Task from './modules/Task.js';
import TaskList from './modules/TaskList.js';
import TaskDone from './modules/TaskDone';

const tasksList = new TaskList();
const generatedElements = document.querySelector('.tasks-container');

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

const refresh = () => {
  generatedElements.replaceChild(renderItemRows(), generatedElements.childNodes[2]);
};

generatedElements.appendChild(renderTitle());
generatedElements.appendChild(renderAddItem());
generatedElements.appendChild(renderItemRows());
generatedElements.appendChild(renderBtn());

const inputSubmitTaskBtn = generatedElements.querySelector('#submit-new-item');
const inputSubmitTaskText = generatedElements.querySelector('#add-new-item');
//  const listContent = generatedElements.querySelector('#list-content');

function Listener() {
  const editBtns = document.querySelectorAll('.edit');
  editBtns.forEach((element) => {
    element.addEventListener('click', (e) => {
      const { id } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      const row = document.querySelector(`#task-${index}`);
      row.classList.add('editing');
      const rowText = document.querySelector(`#editItem-${index}`);
      const rowLbl = document.querySelector(`#lbl-${index}`);
      const rowEditIcon = document.querySelector(`#edit-${index}`);
      const rowDeleteIcon = document.querySelector(`#delete-${index}`);
      rowText.classList.toggle('hidden');
      rowLbl.classList.toggle('hidden');
      rowEditIcon.classList.toggle('hidden');
      rowDeleteIcon.classList.toggle('hidden');
    });
  });

  const deleteBtns = document.querySelectorAll('.delete');
  deleteBtns.forEach((button) => {
    button.addEventListener('click', (e) => {
      const { id } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      tasksList.delete(index);
      tasksList.newIndex();
      refresh();
      Listener();
    });
  });

  const listElements = generatedElements.querySelectorAll('li');
  listElements.forEach((element) => {
    element.addEventListener('dblclick', (e) => { //  dblclick
      const { id } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      const rowTask = document.querySelector(`#task-${index}`);
      if (!rowTask.classList.contains('editing')) {
        rowTask.classList.add('editing');
        const rowText = document.querySelector(`#editItem-${index}`);
        const rowLbl = document.querySelector(`#lbl-${index}`);
        const rowEditIcon = document.querySelector(`#edit-${index}`);
        const rowDeleteIcon = document.querySelector(`#delete-${index}`);
        rowText.classList.toggle('hidden');
        rowLbl.classList.toggle('hidden');
        rowEditIcon.classList.toggle('hidden');
        rowDeleteIcon.classList.toggle('hidden');
        rowText.select();
      }
    });
  });

  const inputEditText = document.querySelectorAll('.input-edit-text');
  inputEditText.forEach((element) => {
    element.addEventListener('blur', (e) => {
      const { id, value } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      const rowTask = document.querySelector(`#task-${index}`);
      rowTask.classList.remove('.editing');
      const rowText = document.querySelector(`#editItem-${index}`);
      const rowLbl = document.querySelector(`#lbl-${index}`);
      const rowEditIcon = document.querySelector(`#edit-${index}`);
      const rowDeleteIcon = document.querySelector(`#delete-${index}`);
      rowText.classList.toggle('hidden');
      rowLbl.classList.toggle('hidden');
      rowEditIcon.classList.toggle('hidden');
      rowDeleteIcon.classList.toggle('hidden');
      const data = {
        description: value,
        index,
      };
      tasksList.edit(data);
      tasksList.newIndex();
      refresh();
      Listener();
    });

    element.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        const { id } = e.target;
        const index = id.substring(id.indexOf('-') + 1, id.length);
        const rowText = document.querySelector(`#editItem-${index}`);
        rowText.blur();
      }
    });
  });
  const checkboxes = generatedElements.querySelectorAll('.checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const { id } = e.target;
      const index = id.substring(id.indexOf('-') + 1, id.length);
      const completed = new TaskDone();
      completed.changeState(index);
      refresh();
      Listener();
    });
  });
}// END LISTENER

//  ENTER AT ADD TO YOUR LIST
inputSubmitTaskText.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    const data = new Task(inputSubmitTaskText.value);
    tasksList.add(data);
    inputSubmitTaskText.value = '';
    tasksList.newIndex();
    refresh();
    Listener();
  }
});

inputSubmitTaskBtn.addEventListener('click', () => {
  const data = new Task(inputSubmitTaskText.value);
  tasksList.add(data);
  inputSubmitTaskText.value = '';
  tasksList.newIndex();
  refresh();
  Listener();
  //  generatedElements.replaceChild(renderItemRows(), listContent);
});

const clearAllBtn = document.querySelector('#clear-btn');
clearAllBtn.addEventListener('click', () => {
  tasksList.clearCompletedTasks();
  tasksList.newIndex();
  refresh();
  Listener();
});
Listener();
