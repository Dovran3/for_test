import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private userRepository: Repository<Task>
  ) {}

  async createTask(task: CreateTaskDto): Promise<string> {
    const newTask = new Task()
    newTask.name_of_task = task.name_of_task
    newTask.status = task.status
    await this.userRepository.save(newTask)
    return 'Successfuly has been created'
  }
}
