"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemDatasourceImpl = void 0;
const node_fs_1 = __importDefault(require("node:fs"));
const custom_error_1 = require("../../domain/exceptions/custom.error");
class FileSystemDatasourceImpl {
    constructor() {
        this.path = 'tasks';
        this.filePath = 'tasks/tasks.json';
        this.createPaths();
    }
    createPaths() {
        const pathExists = node_fs_1.default.existsSync(this.path);
        const filePathExists = node_fs_1.default.existsSync(this.filePath);
        if (!pathExists) {
            node_fs_1.default.mkdirSync(this.path);
        }
        if (filePathExists)
            return;
        node_fs_1.default.writeFileSync(this.filePath, '[]', 'utf-8');
    }
    writeFile(task) {
        const taskObjectToString = JSON.stringify(task, null, 2);
        node_fs_1.default.writeFileSync(this.filePath, taskObjectToString, 'utf-8');
    }
    getTasksFromFile() {
        const tasks = node_fs_1.default.readFileSync(this.filePath, 'utf-8');
        return tasks.length > 0 ? JSON.parse(tasks) : [];
    }
    findAll(filter) {
        const allTasks = this.getTasksFromFile();
        if (filter) {
            const tasksFiltered = allTasks.filter(task => task.status === filter);
            return tasksFiltered;
        }
        return allTasks;
    }
    save(task) {
        const allTasks = this.getTasksFromFile();
        allTasks.push(task);
        this.writeFile(allTasks);
        return task;
    }
    update(id, updateTask) {
        const { description, status } = updateTask;
        const { id: idValue } = id;
        const allTasks = this.getTasksFromFile();
        const taskExists = allTasks.find(task => task.id === idValue);
        if (!taskExists) {
            throw custom_error_1.CustomError.notFound('The task to update does not exists.');
        }
        if (description)
            taskExists.description = description;
        if (status)
            taskExists.status = status;
        taskExists.updatedAt = new Date();
        this.writeFile([...allTasks]);
        return taskExists;
    }
    delete(id) {
        const allTasks = this.getTasksFromFile();
        const taskExists = allTasks.find(task => task.id === id.id);
        if (!taskExists) {
            throw custom_error_1.CustomError.notFound('The task to delete does not exists.');
        }
        const newTasks = allTasks.filter(task => task.id !== id.id);
        this.writeFile(newTasks);
        return taskExists;
    }
}
exports.FileSystemDatasourceImpl = FileSystemDatasourceImpl;
