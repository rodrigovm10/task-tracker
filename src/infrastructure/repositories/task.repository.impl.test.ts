import { DatePlugin } from '../../config/date.plugin'
import { TaskDatasource } from '../../domain/datasources/task.datasource'
import { Task } from '../../domain/entities/task.entity'
import { TaskStatus } from '../../domain/interfaces/task.interface'
import { Description, ID, Status } from '../../domain/value-objects'
import { TaskRepositoryImpl } from './task.repository.impl'

describe('TaskRepositoryImpl', () => {
  const mockLogDatasource: TaskDatasource = {
    findAll: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  }
  const taskRepository = new TaskRepositoryImpl(mockLogDatasource)
  const newTask: Task = {
    id: new ID(1).id,
    description: new Description('test').description,
    status: new Status(TaskStatus.TODO).status,
    createdAt: new DatePlugin().getDate(),
    updatedAt: new DatePlugin().getDate(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('save should call the datasource with arguments', () => {
    taskRepository.save(newTask)

    expect(mockLogDatasource.save).toHaveBeenCalledWith(newTask)
  })

  test('findAll should call the datasource with arguments', () => {
    taskRepository.findAll(TaskStatus.DONE)

    expect(mockLogDatasource.findAll).toHaveBeenCalledWith(TaskStatus.DONE)
  })

  test('findAll should call the datasource without arguments', () => {
    taskRepository.findAll()

    expect(mockLogDatasource.findAll).toHaveBeenCalled()
  })

  test('update should call the datasource with description argument', () => {
    taskRepository.update(new ID(1), new Description('test'))

    expect(mockLogDatasource.update).toHaveBeenCalledWith(new ID(1), new Description('test'))
  })

  test('update should call the datasource with task status argument', () => {
    taskRepository.update(new ID(1), new Status(TaskStatus.DONE))

    expect(mockLogDatasource.update).toHaveBeenCalledWith(new ID(1), new Status(TaskStatus.DONE))
  })

  test('delete should call the datasource with arguments', () => {
    taskRepository.delete(new ID(1))

    expect(mockLogDatasource.delete).toHaveBeenCalledWith(new ID(1))
  })
})
