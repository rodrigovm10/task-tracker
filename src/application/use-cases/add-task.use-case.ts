import { DatePlugin } from '../../config/date.plugin'
import { LogError } from '../../domain/logger/logger'
import { Task } from '../../domain/entities/task.entity'
import { CustomError } from '../../domain/exceptions/custom.error'
import { Description, ID, Status } from '../../domain/value-objects'
import { TaskRepository } from '../../domain/repository/task.repository'
import { CreateTask, TaskStatus } from '../../domain/interfaces/task.interface'

interface AddTaskUseCase {
  execute: (task: CreateTask) => void
}

export class AddTask implements AddTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(task: CreateTask): void {
    try {
      const allTasks = this.taskRepository.findAll()
      const id = allTasks ? allTasks.length + 1 : 1

      const { description } = task

      const newTask: Task = {
        id: new ID(id).id,
        description: new Description(description).description,
        status: new Status(TaskStatus.TODO).status,
        createdAt: new DatePlugin().getDate(),
        updatedAt: new DatePlugin().getDate(),
      }

      this.taskRepository.save(newTask)
      console.log(`Task added successfully (ID: ${newTask.id})`)
    } catch (error) {
      if (error instanceof CustomError) {
        throw new LogError(error.name, error.message)
      }
    }
  }
}
