import { AddTask, FindAll } from '../application/use-cases'
import { TaskStatus } from '../domain/interfaces/task.interface'
import { TaskRepositoryImpl } from '../infrastructure/repositories/task.repository.impl'
import { FileSystemDatasourceImpl } from '../infrastructure/datasources/file-system.datasouce.impl'

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
        new FindAll(taskRepository).execute(args[1] as TaskStatus)
        break
    }
  }
}
