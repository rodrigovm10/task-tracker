import { AddTask } from './add-task.use-case'
import { TaskRepository } from '../../domain/repository/task.repository'
import { UpdateTask } from './update-task.use-case'
import { ID } from '../../domain/value-objects'
import { TaskStatus } from '../../domain/interfaces/task.interface'

describe('UpdateTaskUseCase', () => {
  const mockTaskRepository: TaskRepository = {
    findAll: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  }
  const addTaskUseCase = new UpdateTask(mockTaskRepository)

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should call update with description', () => {
    addTaskUseCase.execute(new ID(1), { description: 'Task 1' })

    expect(mockTaskRepository.update).toHaveBeenCalledWith(new ID(1), { description: 'Task 1' })
  })

  test('should call update status with status done', () => {
    addTaskUseCase.execute(new ID(1), { status: TaskStatus.DONE })

    expect(mockTaskRepository.update).toHaveBeenCalledWith(new ID(1), { status: TaskStatus.DONE })
  })

  test('should call update status with status in-progress', () => {
    addTaskUseCase.execute(new ID(1), { status: TaskStatus.IN_PROGRESS })

    expect(mockTaskRepository.update).toHaveBeenCalledWith(new ID(1), {
      status: TaskStatus.IN_PROGRESS,
    })
  })

  test('should call update status with status todo', () => {
    addTaskUseCase.execute(new ID(1), { status: TaskStatus.TODO })

    expect(mockTaskRepository.update).toHaveBeenCalledWith(new ID(1), { status: TaskStatus.TODO })
  })
})
