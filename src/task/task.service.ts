import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  private tasks: Task[] = [
    new Task(1, 'Task 1', 'Description 1', false),
    new Task(2, 'Task 2', 'Description 2', false),
    new Task(3, 'Task 3', 'Description 3', false),
  ];
  create(task: Task) {
    this.tasks.push(task);
    return this.tasks;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    const OneTask = this.tasks.find(task => task.id === id);
    if (!OneTask) {
      return 'Task not found';

    }
    return OneTask;
  }

  update(id: number, task: Task) {
    const indexTask = this.tasks.findIndex(task => task.id === id);
    if (indexTask !== -1) {
      this.tasks[indexTask] = task;
      return this.tasks[indexTask];
    }
    return 'Task not found';
  }

  remove(id: number) {
    return this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
