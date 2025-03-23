import { ID, Description, Status } from '../value-objects'

interface TaskEntityOptions {
  id: ID
  description: Description
  status: Status
  createdAt: Date
  updatedAt: Date
}

export class Task {
  public id: ID
  public description: Description
  public status: Status
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
