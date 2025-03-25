import { CustomError } from '../../exceptions/custom.error'

export class ID {
  public id: number

  constructor(id: number) {
    this.id = id

    this.validate()
  }

  private isNumber() {
    return Number.isInteger(this.id)
  }

  private isNotEmpty() {
    return this.id !== null && this.id !== undefined
  }

  validate() {
    if (!this.isNotEmpty()) {
      throw CustomError.valueEmpty('ID cannot be empty')
    }

    if (this.id < 0) {
      throw CustomError.validationError('ID cannot be negative')
    }

    if (this.id === 0) {
      throw CustomError.validationError('ID cannot be zero')
    }

    if (!this.isNumber()) {
      throw CustomError.validationError('ID must be a integer')
    }
  }
}
