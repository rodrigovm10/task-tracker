"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTask = void 0;
class DeleteTask {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute(id) {
        const taskDeleted = this.taskRepository.delete(id);
        if (taskDeleted) {
            console.log(`The task with ID: ${taskDeleted.id} has been deleted.`);
            return;
        }
    }
}
exports.DeleteTask = DeleteTask;
