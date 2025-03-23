import { Task, TaskStatus } from '../entities/task.entity'
import { ID } from '../value-objects/id/id'

export abstract class TaskDatasource {
  abstract findAll(): Promise<Task[]>
  abstract findByStatus(status: TaskStatus): Promise<Task[]>
  abstract save(task: Task): Promise<Task[]>
  abstract update(id: ID): Promise<Task[]>
  abstract delete(task: Task): Promise<Task[]>
}
