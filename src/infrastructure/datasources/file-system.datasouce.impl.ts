import fs from 'node:fs'
import { ID } from '../../domain/value-objects'
import { Task } from '../../domain/entities/task.entity'
import { CustomError } from '../../domain/exceptions/custom.error'
import { TaskDatasource } from '../../domain/datasources/task.datasource'
import { TaskStatus, UpdateTask } from '../../domain/interfaces/task.interface'
import { DatePlugin } from '../../config/date.plugin'

export class FileSystemDatasourceImpl implements TaskDatasource {
  private readonly path = 'tasks'
  private readonly filePath = 'tasks/tasks.json'

  constructor() {
    this.createPaths()
  }

  private createPaths() {
    const pathExists = fs.existsSync(this.path)
    const filePathExists = fs.existsSync(this.filePath)

    if (!pathExists) {
      fs.mkdirSync(this.path)
    }

    if (filePathExists) return

    fs.writeFileSync(this.filePath, '[]', 'utf-8')
  }

  private writeFile(task: Task[]): void {
    const taskObjectToString = JSON.stringify(task, null, 2)

    fs.writeFileSync(this.filePath, taskObjectToString, 'utf-8')
  }

  private getTasksFromFile(): Task[] {
    const tasks = fs.readFileSync(this.filePath, 'utf-8')

    return tasks.length > 0 ? JSON.parse(tasks) : []
  }

  findAll(filter?: TaskStatus): Task[] {
    const allTasks = this.getTasksFromFile()

    if (filter) {
      const tasksFiltered = allTasks.filter(task => task.status === filter)
      return tasksFiltered
    }

    return allTasks
  }

  save(task: Task): Task {
    const allTasks = this.getTasksFromFile()

    allTasks.push(task)

    this.writeFile(allTasks)

    return task
  }

  update(id: ID, updateTask: UpdateTask): Task {
    const { description, status } = updateTask
    const { id: idValue } = id

    const allTasks = this.getTasksFromFile()

    const taskExists = allTasks.find(task => task.id === idValue)

    if (!taskExists) {
      throw CustomError.notFound('The task to update does not exists.')
    }

    if (description) taskExists.description = description

    if (status) taskExists.status = status

    taskExists.updatedAt = new DatePlugin().getDate()
    this.writeFile([...allTasks])
    return taskExists
  }

  delete(id: ID): Task {
    const allTasks = this.getTasksFromFile()

    const taskExists = allTasks.find(task => task.id === id.id)

    if (!taskExists) {
      throw CustomError.notFound('The task to delete does not exists.')
    }

    const newTasks = allTasks.filter(task => task.id !== id.id)

    this.writeFile(newTasks)

    return taskExists
  }
}
