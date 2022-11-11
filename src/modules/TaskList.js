export default class TaskList {
  constructor() {
    if (localStorage.getItem('tasks') === null) {
      this.list = [];
    } else {
      this.list = JSON.parse(localStorage.getItem('data'));
    }
  }

  getTask() {
    const data = [];
    if (localStorage.getItem('tasks') === null) {
      this.list = [];
    } else {
      this.list = JSON.parse(localStorage.getItem('data'));

      this.list.forEach((task) => {
        const li = document.createElement('li');
        li.classList.add('todo');
        li.id = `task-${task.index}`;
        li.innerHTML = `
        <input type="checkbox">
        <div class="saved-item">
          <textarea class="task-description" id="${task.index}" maxlength="255">${task.description}</textarea>
        </div>
        <div class="item-icon" id="${task.index}"></div>
        <div class="delete-icon hidden" id="${task.index}"></div>
        `;
        data.push(li);
      });
    }
    return data;
  }
}