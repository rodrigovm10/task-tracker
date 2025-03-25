export class CustomError extends Error {
  constructor(message: string, name: string) {
    super(message)

    this.name = name
  }

  static validationError(message: string) {
    return new CustomError(message, 'ValidationError')
  }

  static valueEmpty(message: string) {
    return new CustomError(message, 'ValueEmpty')
  }

  static wrongType(message: string) {
    return new CustomError(message, 'WrongType')
  }
}
