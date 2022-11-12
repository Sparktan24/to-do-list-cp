import TaskList from './TaskList.js';

export default class TaskDone {
  constructor() {
    this.TaskList = new TaskList();
  }

  changeState(index) {
    this.TaskList.list[index - 1].completed = !this.TaskList.list[index - 1].completed;
    localStorage.setItem('data', JSON.stringify(this.TaskList.list));
  }
}