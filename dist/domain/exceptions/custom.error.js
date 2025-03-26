"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(message, name) {
        super(message);
        this.name = name;
    }
    static validationError(message) {
        return new CustomError(message, 'ValidationError');
    }
    static valueEmpty(message) {
        return new CustomError(message, 'ValueEmpty');
    }
    static wrongType(message) {
        return new CustomError(message, 'WrongType');
    }
    static notFound(message) {
        return new CustomError(message, 'NotFound');
    }
}
exports.CustomError = CustomError;
