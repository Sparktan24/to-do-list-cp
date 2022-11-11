export default class Store {
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