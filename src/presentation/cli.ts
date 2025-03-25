import { AddTask } from '../application/use-cases/add-task.use-case'
import { TaskDatasource } from '../domain/datasources/task.datasource'
import { TaskStatus } from '../domain/interfaces/task.interface'
import { ID } from '../domain/value-objects'
import { FileSystemDatasourceImpl } from '../infrastructure/datasources/file-system.datasouce.impl'
import { TaskRepositoryImpl } from '../infrastructure/repositories/task.repository.impl'

const taskDatasource = new FileSystemDatasourceImpl()
const taskRepository = new TaskRepositoryImpl(taskDatasource)

export class CLI {
  static start() {
    const args = process.argv.slice(2)

    switch (args[0]) {
      case 'add':
        new AddTask(taskRepository).execute({ description: args[1] })
        break
      case 'update':
        break
      case 'delete':
        break
      case 'mark-in-progress':
        break
      case 'mark-done':
        break
      case 'list':
        taskDatasource.findAll(args[1] as unknown as TaskStatus)
        break
    }
  }
}
