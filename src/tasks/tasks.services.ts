import { Injectable } from '@nestjs/common';
import { EStatus, Tasks } from './tasks.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Tasks[] = [];

  getAllTasks() {
    return this.tasks;
  }

  getTaskById(id: string) {
    return this.tasks.filter((task) => task.id === id);
  }

  createTask({ title, description }: { title: string; description: string }) {
    const task = {
      id: uuid(),
      title,
      description,
      status: EStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return;
  }

  updateTaskStatus(id: string, status: EStatus) {
    const task = this.getTaskById(id)[0];
    task.status = status;
    return task;
  }
}
