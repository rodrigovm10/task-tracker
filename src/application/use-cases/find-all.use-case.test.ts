import { AddTask } from './add-task.use-case'
import { TaskRepository } from '../../domain/repository/task.repository'
import { FindAll } from './find-all.use-case'
import { TaskStatus } from '../../domain/interfaces/task.interface'

describe('FindAllTaskUse', () => {
  const mockTaskRepository: TaskRepository = {
    findAll: jest.fn().mockReturnValue([]),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  }
  const findAllTaskUse = new FindAll(mockTaskRepository)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should list all the tasks', () => {
    findAllTaskUse.execute(TaskStatus.DONE)

    expect(mockTaskRepository.findAll).toHaveBeenCalledWith(TaskStatus.DONE)
  })
})
