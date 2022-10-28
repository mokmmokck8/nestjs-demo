import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EStatus } from './tasks.model';
import { TasksService } from './tasks.services';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  // http://localhost:3000/tasks
  @Get()
  getAllTask() {
    return this.taskService.getAllTasks();
  }

  // http://localhost:3000/tasks/{id}
  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  // http://localhost:3000/tasks
  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ) {
    return this.taskService.createTask({ title, description });
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.taskService.deleteTask(id);
  }

  // http://localhost:3000/tasks/{id}/status
  @Patch('/:id/status')
  updateTaskStatus(@Param('id') id: string, @Body('status') status: EStatus) {
    return this.taskService.updateTaskStatus(id, status);
  }
}
