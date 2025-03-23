import { TaskStatus } from '../../interfaces/task'

export class Status {
  public status: TaskStatus

  constructor(status: TaskStatus) {
    this.status = status

    this.validate()
  }

  private isValidStatus() {
    return Object.values(TaskStatus).includes(this.status)
  }

  validate() {
    if (!this.isValidStatus()) {
      console.error(`Status only must be ${Object.values(TaskStatus).join(', ')}`)
    }
  }
}
