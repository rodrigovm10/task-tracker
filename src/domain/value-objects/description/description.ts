import { CustomError } from '../../exceptions/custom.error'

export class Description {
  public description: string

  constructor(description: string) {
    this.description = description

    this.validate()
  }

  private isEmpty() {
    return this.description.length === 0
  }

  private isString() {
    return typeof this.description === 'string'
  }

  validate() {
    if (!this.isString) {
      throw CustomError.validationError('Description must be string')
    }

    if (this.isEmpty()) {
      throw CustomError.valueEmpty('Description cannot be empty')
    }
  }
}
