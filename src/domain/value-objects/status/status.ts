import { CustomError } from '../../exceptions/custom.error'
import { TaskStatus } from '../../interfaces/task.interface'

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
      throw CustomError.wrongType(`Status only must be ${Object.values(TaskStatus).join(', ')}`)
    }
  }
}
