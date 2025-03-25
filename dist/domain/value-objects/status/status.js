"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const custom_error_1 = require("../../exceptions/custom.error");
const task_interface_1 = require("../../interfaces/task.interface");
class Status {
    constructor(status) {
        this.status = status;
        this.validate();
    }
    isValidStatus() {
        return Object.values(task_interface_1.TaskStatus).includes(this.status);
    }
    validate() {
        if (!this.isValidStatus()) {
            throw custom_error_1.CustomError.wrongType(`Status only must be ${Object.values(task_interface_1.TaskStatus).join(', ')}`);
        }
    }
}
exports.Status = Status;
