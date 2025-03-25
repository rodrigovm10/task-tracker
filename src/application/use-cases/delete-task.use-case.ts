import { TaskRepository } from '../../domain/repository/task.repository'
import { ID } from '../../domain/value-objects'

interface DeleteTaskUseCase {
  execute: (id: ID) => void
}

export class DeleteTask implements DeleteTaskUseCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  execute(id: ID) {
    const taskDeleted = this.taskRepository.delete(id)

    if (taskDeleted) {
      console.log(`The task with ID: ${taskDeleted.id} has been deleted.`)
      return
    }
  }
}
