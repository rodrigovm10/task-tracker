import { DeleteTask } from './delete-task.use-case'
import { TaskRepository } from '../../domain/repository/task.repository'
import { ID } from '../../domain/value-objects'
import { Task } from '../../domain/entities/task.entity'

describe('DeleteTaskUseCase', () => {
  const mockTaskRepository: TaskRepository = {
    findAll: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn().mockReturnValue(true),
  }
  const deleteTaskUseCase = new DeleteTask(mockTaskRepository)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should delete a task', () => {
    deleteTaskUseCase.execute(new ID(1))

    expect(mockTaskRepository.delete).toHaveBeenCalled()
    expect(mockTaskRepository.delete).toHaveBeenCalledWith(new ID(1))
  })
})
