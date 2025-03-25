import { TaskStatus } from '../interfaces/task.interface'

interface TaskEntityOptions {
  id: number
  description: string
  status: TaskStatus
  createdAt: string
  updatedAt: string
}

export class Task {
  public id: number
  public description: string
  public status: TaskStatus
  public createdAt: string
  public updatedAt: string

  constructor(options: TaskEntityOptions) {
    const { id, description, status, createdAt, updatedAt } = options

    this.id = id
    this.description = description
    this.status = status
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }
}
