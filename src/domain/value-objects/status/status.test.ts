import { CustomError } from '../../exceptions/custom.error'
import { TaskStatus } from '../../interfaces/task.interface'
import { Status } from './status'

describe('Status', () => {
  test('should create an instance of Status', () => {
    const statusTest = TaskStatus.DONE
    const status = new Status(statusTest)

    expect(status).toBeInstanceOf(Status)
    expect(status.status).toBe(statusTest)
  })
})
