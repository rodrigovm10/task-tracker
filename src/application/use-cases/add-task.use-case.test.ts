import { AddTask } from './add-task.use-case'
import { TaskRepository } from '../../domain/repository/task.repository'

describe('AddTaskUseCase', () => {
  const mockTaskRepository: TaskRepository = {
    findAll: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  }
  const addTaskUseCase = new AddTask(mockTaskRepository)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should add a new task', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    addTaskUseCase.execute({ description: 'New task' })

    expect(consoleSpy).toHaveBeenCalled()
    expect(consoleSpy).toHaveBeenCalledWith('Task added successfully (ID: 1)')
  })
})
