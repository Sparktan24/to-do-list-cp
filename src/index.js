//  import _ from 'lodash';
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
const toDoList = [
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
];

const listContainer = document.querySelector('.item-list');

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
});