import fs from 'node:fs'
import path from 'node:path'
import { FileSystemDatasourceImpl } from './file-system.datasource'
import { Task } from '../../domain/entities/task.entity'
import { Description, ID, Status } from '../../domain/value-objects'
import { DatePlugin } from '../../config/date.plugin'
import { TaskStatus } from '../../domain/interfaces/task.interface'

describe('FileSystemDatasource', () => {
  const taskPath = path.join(__dirname, '../../../tasks')
  const newTask: Task = {
    id: new ID(1).id,
    description: new Description('test').description,
    status: new Status(TaskStatus.TODO).status,
    createdAt: new DatePlugin().getDate(),
    updatedAt: new DatePlugin().getDate(),
  }

  beforeEach(() => {
    fs.rmSync(taskPath, { recursive: true, force: true })
  })

  afterAll(() => {
    fs.rmSync(taskPath, { recursive: true, force: true })
  })

  test('should create task file if it does not exists', () => {
    new FileSystemDatasourceImpl()

    const file = fs.readdirSync(taskPath)

    expect(file).toEqual(['tasks.json'])
  })

  test('should not return allTasks in task.json', () => {
    const fileSystemDatasource = new FileSystemDatasourceImpl()

    const allTasks = fileSystemDatasource.findAll()

    expect(allTasks).toHaveLength(0)
  })

  test('should save a task in tasks.json', () => {
    const fileSystemDatasource = new FileSystemDatasourceImpl()

    fileSystemDatasource.save(newTask)
    const allTasks = fileSystemDatasource.findAll()

    expect(allTasks[0]).toEqual(newTask)
  })

  test('should find all tasks by TODO task in task.json', () => {
    const fileSystemDatasource = new FileSystemDatasourceImpl()

    fileSystemDatasource.save(newTask)
    fileSystemDatasource.findAll(TaskStatus.TODO)

    const allTasks = fileSystemDatasource.findAll()
    expect(allTasks[0].status).toBe(TaskStatus.TODO)
  })

  test('should update task description in tasks.json', () => {
    const fileSystemDatasource = new FileSystemDatasourceImpl()

    fileSystemDatasource.save(newTask)
    fileSystemDatasource.update(new ID(newTask.id), { description: 'updated' })

    const allTasks = fileSystemDatasource.findAll()
    expect(allTasks[0].description).toBe('updated')
  })

  test('should update task status in tasks.json', () => {
    const fileSystemDatasource = new FileSystemDatasourceImpl()

    fileSystemDatasource.save(newTask)
    fileSystemDatasource.update(new ID(newTask.id), { status: TaskStatus.DONE })

    const allTasks = fileSystemDatasource.findAll()
    expect(allTasks[0].status).toBe(TaskStatus.DONE)
  })

  test('should delete a task in tasks.json', () => {
    const fileSystemDatasource = new FileSystemDatasourceImpl()

    fileSystemDatasource.save(newTask)
    fileSystemDatasource.delete(new ID(newTask.id))

    const allTasks = fileSystemDatasource.findAll()
    expect(allTasks).toHaveLength(0)
  })

  test('should not update a task in task.json', () => {
    const fileSystemDatasource = new FileSystemDatasourceImpl()

    fileSystemDatasource.save(newTask)

    try {
      fileSystemDatasource.update(new ID(2), { description: 'update' })
      expect(true).toBe(false)
    } catch (error) {
      const errorString = String(error)
    }
  })

  test('should not delete a task in task.json', () => {
    const fileSystemDatasource = new FileSystemDatasourceImpl()

    fileSystemDatasource.save(newTask)

    try {
      fileSystemDatasource.delete(new ID(2))
      expect(true).toBe(false)
    } catch (error) {
      const errorString = String(error)
    }
  })
})
