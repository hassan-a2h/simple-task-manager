class Task {
  #name;
  #description;
  #status;

  constructor(name = 'Task', description = 'To be completed', status = false) {
    this.name = name;
    this.description = description;
    this.status = status;
  }

  get status() {
    return this.status;
  }

  set status(newStatus) {
    this.status = newStatus;
  }

  get name() {
    return this.name;
  }

  set name(newName) {
    this.name = newName;
  }

  get description() {
    return this.description;
  }

  set description(newDescription) {
    this.description = newDescription;
  }
}

export default Task;