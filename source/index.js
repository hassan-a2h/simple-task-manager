import Task from 'task.js';

class TaskManager {
  #limit
  #activeTasks
  #currentTasks = [];
  #completedTasks = [];

  constructor(limit = 1000) {
    this.limit = limit;
    this.#activeTasks = 0;
  }

  newTask(name = 'Task', description = 'To be completed') {
    if(this.#activeTasks === this.#limit) {
      return;
    }

    const task = Task.new(name, description, null, this.#activeTasks + 1);
    this.#currentTasks.push(task);
    this.#activeTasks++;
  }

  markComplete(task) {
    if (task.getStatus) {
      return;
    }

    task.setStatus = true;
    const index = this.#currentTasks.findIndex((element) => {
      element.id = task.id;
    });

    this.#currentTasks.splice(index, 1);
    this.#completedTasks.push(task);
    this.#activeTasks--;
  }
}