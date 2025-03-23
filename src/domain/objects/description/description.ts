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
      throw new Error('Description must be string')
    }

    if (this.isEmpty()) {
      throw new Error('Description cannot be empty')
    }
  }
}
