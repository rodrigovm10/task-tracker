import { ID } from '../domain/value-objects'
import { LogError } from '../domain/logger/logger'
import { AddTask, FindAll } from '../application/use-cases'
import { TaskStatus } from '../domain/interfaces/task.interface'
import { TaskRepositoryImpl } from '../infrastructure/repositories/task.repository.impl'
import { CustomError } from '../domain/exceptions/custom.error'
import { FileSystemDatasourceImpl } from '../infrastructure/datasources/file-system.datasource'
import { UpdateTask } from '../application/use-cases/update-task.use-case'
import { DeleteTask } from '../application/use-cases/delete-task.use-case'

const taskDatasource = new FileSystemDatasourceImpl()
const taskRepository = new TaskRepositoryImpl(taskDatasource)

export class CLI {
  static start() {
    try {
      const args = process.argv.slice(2)

      switch (args[0]) {
        case 'add':
          new AddTask(taskRepository).execute({ description: args[1] })
          break
        case 'update':
          new UpdateTask(taskRepository).execute(new ID(Number(args[1])), { description: args[2] })
          break
        case 'delete':
          new DeleteTask(taskRepository).execute(new ID(Number(args[1])))
          break
        case 'mark-in-progress':
          new UpdateTask(taskRepository).execute(new ID(Number(args[1])), {
            status: TaskStatus.IN_PROGRESS,
          })
          break
        case 'mark-done':
          new UpdateTask(taskRepository).execute(new ID(Number(args[1])), {
            status: TaskStatus.DONE,
          })
          break
        case 'list':
          new FindAll(taskRepository).execute(args[1] as TaskStatus)
          break
      }
    } catch (error) {
      if (error instanceof CustomError) {
        throw new LogError(error.name, error.message)
      }
    }
  }
}
