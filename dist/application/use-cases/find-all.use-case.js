"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindAll = void 0;
class FindAll {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    execute(filter) {
        const allTasks = this.taskRepository.findAll(filter);
        if (allTasks.length === 0) {
            console.log('There are not tasks yet.');
            return;
        }
        console.table(allTasks);
    }
}
exports.FindAll = FindAll;
