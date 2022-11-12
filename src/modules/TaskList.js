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

  delete(index) {
    this.list.splice(index - 1, 1);
    localStorage.setItem('data', JSON.stringify(this.list));
  }

  edit(data) {
    const { index, description } = data;
    this.list.forEach((element) => {
      if (element.index === parseInt(index, 10)) {
        element.description = description;
      }
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
          <label id="lbl-${task.index}" for="cb-${task.index} class="">${task.description}</label>
          <input type="text" class="input-edit-text hidden" id='editItem-${task.index}' value='${task.description}'>
        </div>
        <div class="item-icon edit" id='edit-${task.index}'></div>
        <div class="delete item-icon hidden" id='delete-${task.index}'></div>
        `;
      data.push(li);
      //  console.log(data);
    });
    return data;
  }
}