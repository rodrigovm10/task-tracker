"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTask = void 0;
const logger_1 = require("../../domain/logger/logger");
class UpdateTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute(id, task) {
        try {
            const taskUpdated = this.taskRepository.update(id, task);
            if (taskUpdated) {
                console.log(`Task Updated! \n ${JSON.stringify(taskUpdated)}`);
                return;
            }
        }
        catch (error) {
            if (error instanceof Error) {
                throw new logger_1.LogError(error.name, error.message);
            }
        }
    }
}
exports.UpdateTask = UpdateTask;
