import { UpdateTask as UpdateTaskEntity } from '../../domain/interfaces/task.interface'
import { LogError } from '../../domain/logger/logger'
import { TaskRepository } from '../../domain/repository/task.repository'
import { ID } from '../../domain/value-objects'

interface UpdateTaskUseCase {
  execute: (id: ID, task: UpdateTaskEntity) => void
}

export class UpdateTask implements UpdateTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(id: ID, task: UpdateTaskEntity) {
    try {
      const taskUpdated = this.taskRepository.update(id, task)

      if (taskUpdated) {
        console.log(`Task Updated! \n ${JSON.stringify(taskUpdated)}`)
        return
      }
    } catch (error) {
      if (error instanceof Error) {
        throw new LogError(error.name, error.message)
      }
    }
  }
}
