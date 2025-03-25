import { Task } from '../../domain/entities/task.entity'
import { TaskStatus } from '../../domain/interfaces/task.interface'
import { TaskRepository } from '../../domain/repository/task.repository'

interface FindAllUseCase {
  execute: (filter: TaskStatus) => void
}

export class FindAll implements FindAllUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(filter: TaskStatus) {
    const allTasks = this.taskRepository.findAll(filter)

    if (allTasks.length === 0) {
      console.log('There are not tasks yet.')
      return
    }

    console.table(allTasks)
  }
}
