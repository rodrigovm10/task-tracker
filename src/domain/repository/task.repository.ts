import { ID } from '../value-objects/id/id'
import { Task } from '../entities/task.entity'
import { CreateTask, TaskStatus, UpdateTask } from '../interfaces/task.interface'

export abstract class TaskRepository {
  abstract findAll(filter?: TaskStatus): Task[]
  abstract save(task: Task): Task
  abstract update(id: ID, task: Task): Task
  abstract delete(id: ID): void
}
