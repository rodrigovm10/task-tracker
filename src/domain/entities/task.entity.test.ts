import { DatePlugin } from '../../config/date.plugin'
import { TaskStatus } from '../interfaces/task.interface'
import { Description, ID, Status } from '../value-objects'
import { Task } from './task.entity'

describe('TaskEntity', () => {
  test('should create a TaskEntity instance', () => {
    const newTask = new Task({
      id: new ID(1).id,
      description: new Description('Test').description,
      status: new Status(TaskStatus.TODO).status,
      createdAt: new DatePlugin().getDate(),
      updatedAt: new DatePlugin().getDate(),
    })

    expect(newTask).toBeInstanceOf(Task)
  })
})
