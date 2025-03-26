import { CustomError } from './custom.error'

describe('CustomError', () => {
  const mockCustomError = new CustomError('message', 'name')

  test('should test custom error', () => {
    expect(mockCustomError).toBeInstanceOf(CustomError)
    expect(mockCustomError.message).toBe('message')
    expect(mockCustomError.name).toBe('name')
  })

  test('should test validation error', () => {
    const validationError = CustomError.validationError('message')
    expect(validationError).toBeInstanceOf(CustomError)
    expect(validationError.name).toBe('ValidationError')
  })

  test('should test empty error', () => {
    const valueEmpty = CustomError.valueEmpty('message')
    expect(valueEmpty).toBeInstanceOf(CustomError)
    expect(valueEmpty.name).toBe('ValueEmpty')
  })

  test('should test wrong type error', () => {
    const wrongType = CustomError.wrongType('message')
    expect(wrongType).toBeInstanceOf(CustomError)
    expect(wrongType.name).toBe('WrongType')
  })

  test('should not found error', () => {
    const notFound = CustomError.notFound('message')
    expect(notFound).toBeInstanceOf(CustomError)
    expect(notFound.name).toBe('NotFound')
  })
})
