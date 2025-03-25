import fs from 'node:fs'
import { Task } from '../../domain/entities/task.entity'
import { TaskDatasource } from '../../domain/datasources/task.datasource'
import { TaskStatus, CreateTask, UpdateTask } from '../../domain/interfaces/task.interface'
import { ID } from '../../domain/value-objects'

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

    if (tasks.length === 0) return []

    return JSON.parse(tasks)
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

  update(id: ID, entity: UpdateTask): Task {
    // const allTasks = this.getAll()
    // const taskToUpdate = allTasks.fin
    // const
    throw new Error('Method not implemented')
  }
  delete(id: ID): void {
    const allTasks = this.getTasksFromFile()

    const taskExists = allTasks.find(task => task.id === id.id)

    if (taskExists) {
      allTasks.filter(task => task.id !== id.id)
    }

    fs.writeFileSync(this.filePath, JSON.stringify(allTasks), 'utf-8')
  }
}
