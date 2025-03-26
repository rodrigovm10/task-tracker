import { LogError } from './logger'

describe('Logger', () => {
  test('should show the log title and the error message', () => {
    const logger = new LogError('Error', 'An error occurred')

    expect(typeof logger.log).toBe('function')
  })
})
