import { ID } from '../value-objects/id/id'
import { Task } from '../entities/task.entity'
import { CreateTask, TaskStatus, UpdateTask } from '../interfaces/task.interface'

export abstract class TaskDatasource {
  abstract findAll(filter?: TaskStatus): Task[]
  abstract save(entity: CreateTask): Task
  abstract update(id: ID, entity: UpdateTask): Task
  abstract delete(id: ID): void
}
