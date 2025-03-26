import { DatePlugin } from '../../config/date.plugin'
import { Task } from '../entities/task.entity'
import { TaskStatus, CreateTask, UpdateTask } from '../interfaces/task.interface'
import { Description, ID, Status } from '../value-objects'
import { TaskDatasource } from './task.datasource'

describe('TaskDatasource', () => {
  const newTask: Task = {
    id: new ID(1).id,
    description: new Description('Test').description,
    status: new Status(TaskStatus.TODO).status,
    createdAt: new DatePlugin().getDate(),
    updatedAt: new DatePlugin().getDate(),
  }

  class MockTaskDatasource implements TaskDatasource {
    findAll(filter?: TaskStatus): Task[] {
      return [newTask]
    }
    save(entity: CreateTask): Task {
      return newTask
    }
    update(id: ID, entity: UpdateTask): Task {
      return newTask
    }
    delete(id: ID): Task {
      return newTask
    }
  }

  test('should test the abstract class', () => {
    const mockTaskDatasource = new MockTaskDatasource()

    expect(mockTaskDatasource).toBeInstanceOf(MockTaskDatasource)
    expect(typeof mockTaskDatasource.findAll).toBe('function')
    expect(typeof mockTaskDatasource.save).toBe('function')
    expect(typeof mockTaskDatasource.update).toBe('function')
    expect(typeof mockTaskDatasource.delete).toBe('function')

    mockTaskDatasource.save(newTask)
    const tasks = mockTaskDatasource.findAll()
    expect(tasks).toHaveLength(1)
  })
})
