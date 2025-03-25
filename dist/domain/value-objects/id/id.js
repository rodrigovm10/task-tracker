"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ID = void 0;
const custom_error_1 = require("../../exceptions/custom.error");
class ID {
    constructor(id) {
        this.id = id;
        this.validate();
    }
    isNumber() {
        return Number.isInteger(this.id);
    }
    isNotEmpty() {
        return this.id !== null && this.id !== undefined;
    }
    validate() {
        if (!this.isNotEmpty()) {
            throw custom_error_1.CustomError.valueEmpty('ID cannot be empty');
        }
        if (this.id < 0) {
            throw custom_error_1.CustomError.validationError('ID cannot be negative');
        }
        if (this.id === 0) {
            throw custom_error_1.CustomError.validationError('ID cannot be zero');
        }
        if (!this.isNumber()) {
            throw custom_error_1.CustomError.validationError('ID must be a integer');
        }
    }
}
exports.ID = ID;
