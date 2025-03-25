"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepositoryImpl = void 0;
class TaskRepositoryImpl {
    constructor(taskDatasource) {
        this.taskDatasource = taskDatasource;
    }
    findAll(filter) {
        return this.taskDatasource.findAll(filter);
    }
    save(entity) {
        return this.taskDatasource.save(entity);
    }
    update(id, entity) {
        return this.taskDatasource.update(id, entity);
    }
    delete(id) {
        return this.taskDatasource.delete(id);
    }
}
exports.TaskRepositoryImpl = TaskRepositoryImpl;
