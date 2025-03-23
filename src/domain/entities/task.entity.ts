import { ID } from '../objects/id/id'

interface TaskEntityOptions {
  id: ID
  description: string
  status: TaskStatus
  createdAt: Date
  updatedAt: Date
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export class Task {
  public id: ID
  public description: string
  public status: TaskStatus
  public createdAt: Date
  public updatedAt: Date

  constructor(options: TaskEntityOptions) {
    const { id, description, status, createdAt, updatedAt } = options

    this.id = id
    this.description = description
    this.status = status
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
