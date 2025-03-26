import { ID } from './id'

describe('ID', () => {
  test('should create an instance of ID', () => {
    const idTest = 1
    const id = new ID(idTest)

    expect(id).toBeInstanceOf(ID)
    expect(id.id).toBe(idTest)
  })
})
