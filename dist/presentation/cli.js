"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLI = void 0;
const value_objects_1 = require("../domain/value-objects");
const logger_1 = require("../domain/logger/logger");
const use_cases_1 = require("../application/use-cases");
const task_interface_1 = require("../domain/interfaces/task.interface");
const task_repository_impl_1 = require("../infrastructure/repositories/task.repository.impl");
const custom_error_1 = require("../domain/exceptions/custom.error");
const file_system_datasouce_impl_1 = require("../infrastructure/datasources/file-system.datasouce.impl");
const update_task_use_case_1 = require("../application/use-cases/update-task.use-case");
const delete_task_use_case_1 = require("../application/use-cases/delete-task.use-case");
const taskDatasource = new file_system_datasouce_impl_1.FileSystemDatasourceImpl();
const taskRepository = new task_repository_impl_1.TaskRepositoryImpl(taskDatasource);
class CLI {
    static start() {
        try {
            const args = process.argv.slice(2);
            switch (args[0]) {
                case 'add':
                    new use_cases_1.AddTask(taskRepository).execute({ description: args[1] });
                    break;
                case 'update':
                    new update_task_use_case_1.UpdateTask(taskRepository).execute(new value_objects_1.ID(Number(args[1])), { description: args[2] });
                    break;
                case 'delete':
                    new delete_task_use_case_1.DeleteTask(taskRepository).execute(new value_objects_1.ID(Number(args[1])));
                    break;
                case 'mark-in-progress':
                    new update_task_use_case_1.UpdateTask(taskRepository).execute(new value_objects_1.ID(Number(args[1])), {
                        status: task_interface_1.TaskStatus.IN_PROGRESS,
                    });
                    break;
                case 'mark-done':
                    new update_task_use_case_1.UpdateTask(taskRepository).execute(new value_objects_1.ID(Number(args[1])), {
                        status: task_interface_1.TaskStatus.DONE,
                    });
                    break;
                case 'list':
                    new use_cases_1.FindAll(taskRepository).execute(args[1]);
                    break;
            }
        }
        catch (error) {
            if (error instanceof custom_error_1.CustomError) {
                throw new logger_1.LogError(error.name, error.message);
            }
        }
    }
}
exports.CLI = CLI;
