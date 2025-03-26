"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTask = void 0;
const date_plugin_1 = require("../../config/date.plugin");
const logger_1 = require("../../domain/logger/logger");
const custom_error_1 = require("../../domain/exceptions/custom.error");
const value_objects_1 = require("../../domain/value-objects");
const task_interface_1 = require("../../domain/interfaces/task.interface");
class AddTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute(task) {
        try {
            const allTasks = this.taskRepository.findAll();
            const id = allTasks ? allTasks.length + 1 : 1;
            const { description } = task;
            const newTask = {
                id: new value_objects_1.ID(id).id,
                description: new value_objects_1.Description(description).description,
                status: new value_objects_1.Status(task_interface_1.TaskStatus.TODO).status,
                createdAt: new date_plugin_1.DatePlugin().getDate(),
                updatedAt: new date_plugin_1.DatePlugin().getDate(),
            };
            this.taskRepository.save(newTask);
            console.log(`Task added successfully (ID: ${newTask.id})`);
        }
        catch (error) {
            if (error instanceof custom_error_1.CustomError) {
                throw new logger_1.LogError(error.name, error.message);
            }
        }
    }
}
exports.AddTask = AddTask;
