import { CustomError } from '../../exceptions/custom.error'
import { Description } from './description'

describe('Description', () => {
  test('should create an instance of Description', () => {
    const descriptionMessage = 'description'
    const description = new Description(descriptionMessage)

    expect(description).toBeInstanceOf(Description)
    expect(description.description).toBe(descriptionMessage)
  })

  test('should throw an error if description is empty', () => {
    expect(() => new Description('')).toThrow(CustomError.valueEmpty('Description cannot be empty'))
  })
})
