export default class TaskList {
  constructor() {
    this.list = JSON.parse(localStorage.getItem('data')) || [];
  }

  add(data) {
    const index = this.list.length + 1;
    data.index = index;
    this.list.push(data);
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  newIndex() {
    let count = 1;
    this.list.forEach((task) => {
      task.index = count;
      count += 1;
    });
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  getTask() {
    const data = [];
    this.list = JSON.parse(localStorage.getItem('data')) || [];
    this.list.forEach((task) => {
      const li = document.createElement('li');
      li.classList.add('row');
      li.id = `task-${task.index}`;
      li.innerHTML = `
        <div class="task-content">
          <input id="cb-${task.index}" type="checkbox" class="checkbox">
          <label for="cb-${task.index} id='lbl-${task.index}'" class="">${task.description}</label>
          <input type="text" class="input-edit-text hidden" id='edit-item-${task.index}' value='${task.description}'>
        </div>
        <div class="item-icon"></div>
        `;
      data.push(li);
      //  console.log(data);
    });
    return data;
  }
}