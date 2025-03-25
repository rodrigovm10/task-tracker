"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Description = void 0;
const custom_error_1 = require("../../exceptions/custom.error");
class Description {
    constructor(description) {
        this.description = description;
        this.validate();
    }
    isEmpty() {
        return this.description.length === 0;
    }
    isString() {
        return typeof this.description === 'string';
    }
    validate() {
        if (!this.isString) {
            throw custom_error_1.CustomError.validationError('Description must be string');
        }
        if (this.isEmpty()) {
            throw custom_error_1.CustomError.valueEmpty('Description cannot be empty');
        }
    }
}
exports.Description = Description;
