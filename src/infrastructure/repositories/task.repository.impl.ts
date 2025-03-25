import { ID } from '../../domain/value-objects'
import { Task } from '../../domain/entities/task.entity'
import { TaskRepository } from '../../domain/repository/task.repository'
import { TaskDatasource } from '../../domain/datasources/task.datasource'
import { CreateTask, TaskStatus, UpdateTask } from '../../domain/interfaces/task.interface'

export class TaskRepositoryImpl implements TaskRepository {
  constructor(private readonly taskDatasource: TaskDatasource) {}

  findAll(filter?: TaskStatus): Task[] {
    return this.taskDatasource.findAll(filter)
  }
  save(entity: CreateTask): Task {
    return this.taskDatasource.save(entity)
  }
  update(id: ID, entity: UpdateTask): Task {
    return this.taskDatasource.update(id, entity)
  }
  delete(id: ID): void {
    return this.taskDatasource.delete(id)
  }
}
