import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.services';

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
